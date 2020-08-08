import React from 'react';

import './style.css';
import whatsappIcon from '../../Assets/images/icons/whatsapp.svg'
import api from '../../Services/api';

export interface Class {
    id: number,
    name: string,
    avatar: string,
    subject: string,
    price: Number,
    whatsapp: string,
    bio: string
}

interface ClassItemProps {
    Class: Class
}


const ClassItem: React.FunctionComponent<ClassItemProps> = ({ Class }) => {
    async function createNewConnection() {
        const res = await api.post('/connections', {
            user_id: Class.id
        });
        return (res.data);
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={Class.avatar} alt={Class.name} />
                <div>
                    <strong>{Class.name}</strong>
                    <span>{Class.subject}</span>
                </div>
            </header>
            <p>
                {Class.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>R$ {Class.price}</strong>
                </p>
                <a onClick={createNewConnection} href={`https://wa.me/55${Class.whatsapp}?text=Bah`} target="__blank">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </a>
            </footer>
        </article>
    );
}

export default ClassItem;