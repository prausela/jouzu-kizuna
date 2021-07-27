import { Button } from 'react-bootstrap';
import React from 'react';

const MenuUI = (props) => {
    const correct      = props.correct ? props.correct : 0;
    const incorrect    = props.incorrect ? props.incorrect : 0;
    const resetGame    = props.resetGame;
    const returnToMenu = props.returnToMenu;
    return (
        <div className="menu d-flex">
            <div className="flex-grow-1 flex-basis-0 px-2">
                <Button variant="outline-dark" onClick={returnToMenu} active>←<br />Volver</Button>
            </div>
            <div className="d-flex flex-grow-1">
                <div className="flex-grow-1 px-1"><div className="alert alert-success text-center">Bien<br />{correct}</div></div>
                <div className="flex-grow-1 px-1"><div className="alert alert-danger text-center">Mal<br />{incorrect}</div></div>
            </div>
            <div className="flex-grow-1 d-flex justify-content-end align-items-start flex-basis-0 px-2">
                <Button variant="outline-dark" onClick={resetGame} active>⟲<br />Reset</Button>
            </div>
        </div>
    )
}

export default MenuUI;