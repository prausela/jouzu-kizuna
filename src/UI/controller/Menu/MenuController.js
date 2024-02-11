import React, { useState } from "react";
import MainController from "./MainController";
import SelectionController from "./SelectionController";
import UserController from "./UserController";

const MenuController = ({switchToGameMode, notifications}) => {
    const interfaces = {
        "main"      : {
            controller : MainController
        }, 
        "selection" : {
            controller : SelectionController
        },
        "user" : {
            controller : UserController
        }
    }

    const [ currInterface, setCurrInterface ]   = useState("main");
    const [ interfaceProps, setInterfaceProps ] = useState({});

    const Controller = interfaces[currInterface].controller;

    const switchToMain = () => {
        setCurrInterface("main");
        setInterfaceProps({});
    }
    
    const switchToSelection = (selectionId, title) => {
        setCurrInterface("selection");
        setInterfaceProps({
            "selectionId"      : selectionId,
            "title"            : title,
            "switchToGameMode" : switchToGameMode
        })
    }

    const switchToUser = () => {
        setCurrInterface("user");
        setInterfaceProps({});
    }

    return (
        <Controller 
            switchToMain={switchToMain}
            switchToSelection={switchToSelection}
            switchToUser={switchToUser}
            notifications={notifications}
            {...interfaceProps}
        />
    )
}

export default MenuController;