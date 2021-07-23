import React from 'react';

const MenuUI = (props) => {
    const correct = props.correct ? props.correct : 0;
    const incorrect = props.incorrect ? props.incorrect : 0;
    return (
        <div className="menu d-flex">
            <div className="flex-grow-1 px-3"><div className="alert alert-success">○ Bien: {correct}</div></div>
            <div className="flex-grow-1 px-3"><div className="alert alert-danger">× Mal: {incorrect}</div></div>
        </div>
    )
}

export default MenuUI;