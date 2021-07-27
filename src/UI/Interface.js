import React from 'react';
import './Interface.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameController from './GameController';

const Interface = (props) => {
    return (
        <div className="interface">
            <GameController />
        </div>
    )
}

export default Interface;