import React from 'react';

import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Elements/Input';
import Select from '../../Components/Elements/Select';
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        label="Matéria"
                        name="subject"
                        padrao="Qual matéria você quer aprender ???"
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