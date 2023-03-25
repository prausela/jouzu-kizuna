import React, { useState } from "react";
import MainController from "./MainController";
import SelectionController from "./SelectionController";

const MenuController = ({switchToGameMode, notifications}) => {
    const interfaces = {
        "main"      : {
            controller : MainController
        }, 
        "selection" : {
            controller : SelectionController
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

    return (
        <Controller 
            switchToMain={switchToMain}
            switchToSelection={switchToSelection}
            notifications={notifications}
            {...interfaceProps}
        />
    )
}

export default MenuController;