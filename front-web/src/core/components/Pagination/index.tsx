import React from 'react';
import './styles.css';
import { generateList } from 'core/utils/list';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ( {totalPages, activePage, onChange} :Props) => {
    const items = generateList(totalPages);
    var showPage = "pagination-container ";
    
    if (totalPages === 1) {
        showPage += "d-none " }
    else { 
        showPage += "d-flex"
    };

    return (
        <div className={showPage}>
            {items.map(item => (
                <div
                    key = {item}
                    className = {`pagination-item ${item === activePage && 'active'}`}
                    onClick = { () => onChange(item) }
                >
                    {item + 1}
                </div>
            ))}
        </div>
    );
}

export default Pagination;