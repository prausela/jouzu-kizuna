// From packages
import React, { useState } from 'react';

// Style files
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interface.css';

// Controllers
import MainMenuController from './controller/MainMenuController';
import GameController from './controller/GameController';
import MenuController from './controller/Menu/MenuController';

const Interface = (props) => {
    const interfaces = {
        "main_menu"    : {
            className   : "main-menu-interface",
            controller  : MainMenuController
        },
        "main" : {
            className   : "",
            controller  : MenuController
        },
        "kanji_to_hiragana_game" : {
            className   : "game-interface",
            controller  : GameController
        },
        "te_form_game"          : {
            className   : "game-interface te-form-game-interface",
            controller  : GameController
        },
        "dictionary_form_game"  : {
            className   : "game-interface te-form-game-interface",
            controller  : GameController
        },
        "nai_form_game"  : {
            className   : "game-interface te-form-game-interface",
            controller  : GameController
        },
        "ta_form_game"  : {
            className   : "game-interface te-form-game-interface",
            controller  : GameController
        },
        "guess_form_game" : {
            className   : "game-interface guess-form-game-interface",
            controller  : GameController
        },
        "counters_game" : {
            className   : "game-interface te-form-game-interface",
            controller  : GameController
        }
    }

    const services      = props.services;
    const gameMode      = props.gameMode;
    const setGameMode   = props.setGameMode;

    const [ currInterface, setCurrInterface ] = useState("main");

    const className     = "interface " + interfaces[currInterface].className;
    const Controller    = interfaces[currInterface].controller;

    const switchToGameMode = (gameMode) => {
        setGameMode(gameMode);
        setCurrInterface(gameMode);
    }

    const returnToMenu = () => {
        setCurrInterface("main");
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