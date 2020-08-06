import express from 'express';
import ClassesController from './Controller/classesControler';
import ConnectionController from './Controller/connectionsController';

const router = express.Router();

const classesController = new ClassesController();
const connectionController = new ConnectionController();

router.get('/classes', classesController.index);

router.post('/classes', classesController.create);


router.get('/connections', connectionController.index);

router.post('/connections', connectionController.create);

export default router;