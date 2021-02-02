import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from 'core/components/ButtonIcon';
import history from 'core/utils/history';
import './styles.scss';

type FormState = {
    username: string;
    password: string;
};

config.autoA11y = true;

const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);

    const onSubmit = (data: FormState) => {
        makeLogin(data)
        .then(response => {
            setHasError(false);
            saveSessionData(response.data);
            history.push('/movies');
        })
        .catch(() => {
            setHasError(true);
        });
    }

    const [showEye, setShowEye] = useState(false);
    const togglePasswordVisiblity = () => {
        setShowEye(showEye ? false : true);
    };
    
    return (
        <div className="login-content card-base">
            <h1 className="login-title">login</h1>
            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválidos!
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-bottom-30">
                    <input
                        type="email"
                        className={`input-base input-email ${errors.username ? 'form-control is-invalid' : ''}`}
                        placeholder="Email"
                        name="username"
                        ref={register({
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    />
                    {errors.username && (
                        <div className="input-invalid row justify-content-start">
                            {errors.username.message}
                        </div>)
                    }
                </div>
                <div>
                    <div className="input-password-container">
                        <input
                            type={showEye ? "text" : "password"}
                            placeholder="Senha"
                            className={`input-base input-password ${errors.password ? 'form-control is-invalid' : ''}`}
                            name="password"
                            ref={register({ required: "Campo Obrigatório"})}
                        />
                        <Link to="#" className="hide-show-password d-flex" onClick={togglePasswordVisiblity}>
                            {showEye ? <FontAwesomeIcon className="d-flex align-self-center icon " icon={faEyeSlash} /> : <FontAwesomeIcon className="d-flex align-self-center icon " icon={faEye}/>}
                        </Link>
                    </div>
                    {errors.password && (
                        <div className="input-invalid row justify-content-start">
                            {errors.password.message}
                        </div>)
                    }
                </div>
                <div className="login-button d-flex">
                    <ButtonIcon text="logar" />
                </div>
            </form>
        </div>
    );
}

export default Login;