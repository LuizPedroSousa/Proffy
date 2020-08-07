import React from 'react';

import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Input';
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input label="Matéria" type="text" name="subject" />
                    <Input label="Dia da semana" type="text" name="week_day" />
                    <Input label="Horário" type="time" name="time" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />

            </main>
        </div>
    );
}

export default TeacherList;