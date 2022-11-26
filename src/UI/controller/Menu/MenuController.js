import React, { useState } from "react";
import MainController from "./MainController";
import SelectionController from "./SelectionController";

const MenuController = ({switchToGameMode}) => {
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
    
    const switchToSelection = (selectionId) => {
        setCurrInterface("selection");
        setInterfaceProps({
            "selectionId"      : selectionId,
            "switchToGameMode" : switchToGameMode
        })
    }

    return (
        <Controller 
            switchToMain={switchToMain}
            switchToSelection={switchToSelection}
            {...interfaceProps}
        />
    )
}

export default MenuController;