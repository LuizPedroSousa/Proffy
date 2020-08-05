import React from 'react';

import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="wek_day">Dia Da Semana</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem />

            </main>
        </div>
    );
}

export default TeacherList;