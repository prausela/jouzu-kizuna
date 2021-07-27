// From packages
import React, { useState } from 'react';

// Style files
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interface.css';

// Controllers
//import MainMenuController from './MainMenuController';
import GameController from './GameController';

const Interface = (props) => {
    const interfaces = {
        /*"main_menu" : {
            className   : "main-menu-interface",
            controller  : MainMenuController
        },*/
        "game"      : {
            className   : "game-interface",
            controller  : GameController
        }
    }

    const [ currInterface, setCurrInterface ] = useState("game");

    const className     = "interface " + interfaces[currInterface].className;
    const Controller    = interfaces[currInterface].controller
    return (
        <div className={className}>
            <Controller />
        </div>
    )
}

export default Interface;