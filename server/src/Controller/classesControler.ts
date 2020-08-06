import { Request, Response } from 'express';

import db from '../database/connection';
import convertHoursToMinutes from '../Utils/convertHoursToMinutes';

interface scheduleItem {
    week_day: number,
    from: string,
    to: string
}
export default class ClassesController {

    async index(req: Request, res: Response) {
        const filters = req.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json({
                error: "Falha ao filtrar usuarios"
            });
        }

        const timeMinutes = convertHoursToMinutes(time);

        const classes = await db('classes')
            .whereExists(function (){
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeMinutes])
            })
            .where("classes.subject", "=", subject)
            .join("users", "classes.user_id", "=", "users.id")
            .select(['classes.*', 'users.*']);

        return res.json(classes);
    }

    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            subject,
            bio,
            price,
            schedule
        } = req.body;

        const trx = await db.transaction();

        try {
            const insertedUserIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUserIds[0]

            const insertedClassesIds = await trx('classes').insert({
                subject,
                price,
                user_id
            });

            const class_id = insertedClassesIds[0];

            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHoursToMinutes(scheduleItem.from),
                    to: convertHoursToMinutes(scheduleItem.to)
                }
            });

            await trx('class_schedule').insert(classSchedule);

            await trx.commit();

            console.log(`Dados enviados com sucesso`)

            return res.status(201).send();
        } catch (err) {

            trx.rollback();

            return res.status(400).json({
                error: "Falha ao enviar dados para o banco"
            });
        }


    };
}