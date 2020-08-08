import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';

import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Elements/Input';
import Select from '../../Components/Elements/Select';
import TextArea from '../../Components/Elements/TextArea';

import './style.css'

import warningIcon from '../../Assets/images/icons/warning.svg';
import api from '../../Services/api';

function TeacherForm() {
    const history = useHistory();
    const [scheduItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" },
    ]);

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [price, setPrice] = useState('');

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduItems,
            { week_day: 0, from: "", to: "" }

        ]);
    }
    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduItems.map((scheduItem, index) => {
            if (index === position) {
                return { ...scheduItem, [field]: value };
            }
            return scheduItem;
        });
        setScheduleItems(updatedScheduleItems);
    }


    function createClass(e: FormEvent) {
        e.preventDefault();
        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            price: Number(price,),
            schedule: scheduItems,
        }).then(() => {
            window.alert('Cadastro enviado para com sucesso');
            history.push('/');
        }).catch((err) => {
            window.alert(`Falha ao enviar dados: ${err}`)
        });
    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />
            <main>
                <form onSubmit={createClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input
                            label="Nome completo"
                            type="text"
                            name="name"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={e => { setName(e.target.value) }}
                        />
                        <Input
                            label="Avatar"
                            type="text"
                            name="avatar"
                            placeholder="Digite o link da sua foto"
                            value={avatar}
                            onChange={e => { setAvatar(e.target.value) }}
                        />
                        <Input
                            label="Whatsapp"
                            type="number"
                            name="whatsapp"
                            placeholder="Digite o seu número"
                            value={whatsapp}
                            onChange={e => { setWhatsapp(e.target.value) }}
                        />
                        <TextArea
                            label="Biografia"
                            name="bio"
                            value={bio}
                            onChange={e => { setBio(e.target.value) }}
                        />
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
                            value={subject}
                            onChange={e => { setSubject(e.target.value) }}
                        />
                        <Input
                            label="Custo da sua matéria por aula"
                            type="number"
                            name="price"
                            value={price}
                            onChange={e => { setPrice(e.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Horários Disponiveis
                    <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                    </button>
                        </legend>
                        {scheduItems.map((scheduleItem, index) => {
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
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}

                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
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
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;