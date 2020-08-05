import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../Assets/images/icons/back.svg';
import logoImage from '../../Assets/images/logo.svg';

import './style.css'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="voltar" />
                </Link>
                <img src={logoImage} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;