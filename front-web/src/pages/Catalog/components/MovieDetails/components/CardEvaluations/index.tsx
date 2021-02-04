import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

type Props = {
    autorReview?: string;
    textReview?: string;
}

const CardEvaluations = ({autorReview, textReview}:Props) => {

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faStar} className="evaluations-img" />
                <p className="evaluations-name" >{autorReview}</p>
            </div>
            <div style={{ display: 'block' }}>
                <div className="evaluations-form">
                <h3 className="evaluations-text">{textReview}</h3>
                </div>
            </div>
        </div>
    );
};

export default CardEvaluations;