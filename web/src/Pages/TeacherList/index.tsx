import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Class } from '../../Components/TeacherItem';
import Input from '../../Components/Elements/Input';
import Select from '../../Components/Elements/Select';
import api from '../../Services/api';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubjectItem] = useState('');
    const [week_day, setWeek_dayItem] = useState('');
    const [time, setTimeItem] = useState('');

    async function findClasses(e: FormEvent) {
        e.preventDefault();

        const res = await api.get('/classes', {
            params: {
                week_day,
                subject,
                time
            }

        })

        setTeachers(res.data);
    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={findClasses}>
                    <Select
                        label="Matéria"
                        name="subject"
                        padrao="Qual matéria você quer aprender ???"
                        value={subject}
                        onChange={e => setSubjectItem(e.target.value)}
                        options={[
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Biologia', label: 'Biolôgia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Histôria', label: 'Histôria' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'Fisolofia', label: 'Filosofia' },
                            { value: 'Artes', label: 'Artes' },
                        ]}
                    />
                    <Select
                        label="Dia da semana"
                        name="week_day"
                        padrao="Selecione o dia da semana"
                        value={week_day}
                        onChange={e => setWeek_dayItem(e.target.value)}
                        options={[
                            { value: '0', label: 'Domigo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabado' },
                        ]}
                    />
                    <Input
                        label="Horário"
                        type="time"
                        name="time"
                        value={time}
                        onChange={e => setTimeItem(e.target.value)}
                    />
                    <button type="submit">
                        <span><i className="fab fa-searchengin"></i></span>
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Class) => {
                    return <TeacherItem key={teacher.id} Class={teacher} />
                })}

            </main>
        </div>
    );
}

export default TeacherList;