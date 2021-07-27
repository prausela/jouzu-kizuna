// From packages
import React, { useState } from 'react';

// Style files
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interface.css';

// Controllers
import MainMenuController from './controllers/MainMenuController';
import GameController from './controllers/GameController';

const Interface = (props) => {
    const interfaces = {
        "main_menu"    : {
            className   : "main-menu-interface",
            controller  : MainMenuController
        },
        "kanji_to_hiragana_game" : {
            className   : "game-interface",
            controller  : GameController
        },
        "te_form_game"          : {
            className   : "game-interface te-form-game-interface",
            controller  : GameController
        }
    }

    const services      = props.services;
    const gameMode      = props.gameMode;
    const setGameMode   = props.setGameMode;

    const [ currInterface, setCurrInterface ] = useState("main_menu");

    const className     = "interface " + interfaces[currInterface].className;
    const Controller    = interfaces[currInterface].controller

    const switchToGameMode = (gameMode) => {
        setGameMode(gameMode);
        setCurrInterface(gameMode);
    }

    const returnToMenu = () => {
        setCurrInterface("main_menu");
    }

    return (
        <div className={className}>
            <Controller
                services={services} 
                gameMode={gameMode}
                returnToMenu={returnToMenu}
                switchToGameMode={switchToGameMode}
            />
        </div>
    )
}

export default Interface;