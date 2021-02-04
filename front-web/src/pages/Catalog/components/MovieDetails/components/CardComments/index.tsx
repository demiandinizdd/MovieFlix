import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makePrivateRequest } from 'core/utils/request';
import './styles.css';

type ParamsType = {
    id: string,
}

type FormState = {
    text?: string,
    movieId: number,
}

const CardComments = ({ id }: ParamsType) => {
    const { register, errors, handleSubmit } = useForm<FormState>();
    const history = useHistory();

    const onSubmit = (data: FormState) => {
        data.movieId = parseInt(id);
        makePrivateRequest({ url: `/reviews`, method: 'POST', data })
            .then(response => {
                toast.info("Obrigado! Sua avaliação foi salva com sucesso!")
                history.go(0);
            })
            .catch(() => {
                toast.error("Houve um erro ao salvar sua avaliação. Por favor, tente novamente.")
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="comment-container">
                {
                    errors.text && (
                        <div className="comment-alert">
                            Preencha sua avaliação.
                        </div>
                    )
                }
                <textarea
                    name="text"
                    className="comment-input"
                    placeholder="Deixe sua avaliação aqui"
                    cols={2}
                    rows={10}
                    ref={register({ required: "Avaliação deve ser preenchida" })}
                />
                <button className="comment-btn d-flex justify-content-center">
                    <h3 className="comment-btn-text d-flex justify-content-center">salvar avaliação</h3>
                </button>
            </form>
        </>
    );
}

export default CardComments;