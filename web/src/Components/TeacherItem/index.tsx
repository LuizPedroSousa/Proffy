import React from 'react';

import './style.css';
import whatsappIcon from '../../Assets/images/icons/whatsapp.svg'

interface TeacherItemProps {

}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg" alt="Luiz Pedro" />
                <div>
                    <strong>Luiz Pedro</strong>
                    <span>Programing</span>
                </div>
            </header>
            <p>
                hmmmm Café Docinho
                </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>R$ 20.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;