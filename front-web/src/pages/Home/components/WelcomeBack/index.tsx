import React from 'react';
import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.scss';

const WelcomeBack = () => {
    return (
        <div className="card-base welcome-content">
            <h1 className="welcome-title">Bem vindo de volta!</h1>
            <div className="welcome-button justify-content-center">
                <Link to="/movies">
                    <ButtonIcon text="Ver lista de filmes" />
                </Link>
            </div>
        </div>
    );
}

export default WelcomeBack;