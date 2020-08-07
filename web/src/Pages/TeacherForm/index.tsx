import React, {useState} from 'react';

import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Elements/Input';
import Select from '../../Components/Elements/Select';
import TextArea from '../../Components/Elements/TextArea';

import './style.css'

import warningIcon from '../../Assets/images/icons/warning.svg';

function TeacherForm() {
    const [scheduItems, setScheduleItems] = useState([
        {week_day: 0, from: "", to: ""},
    ]);
    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduItems,
            {week_day: 0, from: "", to: ""}

        ]);
    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input label="Nome completo" type="text" name="name" placeholder="Digite seu nome" />
                    <Input label="Avatar" type="text" name="avatar" placeholder="Digite o link da sua foto" />
                    <Input label="Whatsapp" type="number" name="whatsapp" placeholder="Digite o seu número" />
                    <TextArea label="Biografia" name="bio" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        label="Matéria"
                        name="subject"
                        padrao="Qual matéria você quer ensinar ???"
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
                    <Input label="Custo da sua matéria por aula" type="number" name="price" />
                </fieldset>
                <fieldset>
                    <legend>Horários Disponiveis
                    <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                    </button>
                    </legend>
                    {scheduItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select
                                label="Dia da semana"
                                name="week_day"
                                padrao="Selecione o dia"
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
                            <Input name="from" label="Das" type="time"/>
                            <Input name="to" label="Até" type="time"/>                        
                        </div>
                        );
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Alerta" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;