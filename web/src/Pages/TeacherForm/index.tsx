import React from 'react';

import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';

import './style.css'

import warningIcon from '../../Assets/images/icons/warning.svg';

function TeacherForm() {
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
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input label="Custo da sua matéria por aula" type="number" name="price" />
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Alerta"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;