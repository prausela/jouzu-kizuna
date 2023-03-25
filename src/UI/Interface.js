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

    const services          = props.services;

    const questionSet       = props.questionSet;
    const setQuestionSet    = props.setQuestionSet;

    const questionCategory       = props.questionCategory;
    const setQuestionCategory    = props.setQuestionCategory;

    const [ currInterface, setCurrInterface ] = useState("main");

    const className     = "interface " + interfaces[currInterface].className;
    const Controller    = interfaces[currInterface].controller;

    const switchToGameMode = (setId, categoryId) => {
        setQuestionSet(setId + "");
        setQuestionCategory(categoryId + "");
        setCurrInterface("game");
    }

    const returnToMenu = () => {
        setCurrInterface("main");
    }

    return (
        <div className={className}>
            <Controller
                services={services} 
                questionSet={questionSet}
                questionCategory={questionCategory}
                returnToMenu={returnToMenu}
                switchToGameMode={switchToGameMode}
                notifications={props.notifications}
            />
        </div>
    )
}

export default Interface;