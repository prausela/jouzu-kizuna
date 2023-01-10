// From packages
import React, { useState } from 'react';

// Style files
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interface.css';

// Controllers
import GameController from './controller/GameController';
import MenuController from './controller/Menu/MenuController';

const Interface = (props) => {
    const interfaces = {
        "main" : {
            className   : "",
            controller  : MenuController
        },
        "game" : {
            className   : "game-interface",
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
        setCurrInterface("game");
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