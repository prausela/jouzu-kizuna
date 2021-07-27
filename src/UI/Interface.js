// From packages
import React, { useState } from 'react';

// Style files
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interface.css';

// Controllers
import MainMenuController from './MainMenuController';
import GameController from './GameController';

const Interface = (props) => {
    const interfaces = {
        "main_menu" : {
            className   : "main-menu-interface",
            controller  : MainMenuController
        },
        "game"      : {
            className   : "game-interface",
            controller  : GameController
        }
    }

    const [ currInterface, setCurrInterface ] = useState("main_menu");

    const className     = "interface " + interfaces[currInterface].className;
    const Controller    = interfaces[currInterface].controller

    const switchToGameMode = (gameMode) => {
        setCurrInterface(gameMode);
    }

    const returnToMenu = () => {
        setCurrInterface("main_menu");
    }

    return (
        <div className={className}>
            <Controller 
                returnToMenu={returnToMenu}
                switchToGameMode={switchToGameMode}
            />
        </div>
    )
}

export default Interface;