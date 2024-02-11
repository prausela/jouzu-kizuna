import React from 'react';
import MenuUI from './__prototype__/MenuUI';

import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faHashtag, faMinus, faGear } from "@fortawesome/free-solid-svg-icons";

const quickActions = [
    {
        "name"      : "Nuevo",
        "icon"      : faPlus,
        "show"      : false,
        "disabled"  : true
    }, {
        "name"      : "Agregar",
        "icon"      : faHashtag,
        "show"      : false,
        "disabled"  : true
    }, {
        "name"      : "Quitar",
        "icon"      : faMinus,
        "show"      : false,
        "disabled"  : true
    }, {
        "name"      : "Ajustes",
        "icon"      : faGear,
        "show"      : true,
        "disabled"  : true
    }
]

const MainUI = ({switchToUser, selection, notifications}) => {
    const context = {
        "title"  : "上手絆",
        "icon"   : faHome,
        "rightAction" : {
            "title"   : "わたし",
            "icon"    : faUser,
            "onClick" : switchToUser
        }
    }

    return (
        <MenuUI 
            context={context}
            selection={selection}
            quickActions={quickActions}
            notifier={notifications}
        />
    )
}

export default MainUI;