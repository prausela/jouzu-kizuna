// From packages
import React from 'react';

// Style files
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interface.css';

// Controllers
import GameController from './GameController';
//import MainMenuController from './MainMenuController';

const Interface = (props) => {
    return (
        <div className="interface">
            <GameController />
        </div>
    )
}

export default Interface;