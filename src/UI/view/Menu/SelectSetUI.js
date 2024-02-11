import React from 'react';

import MenuUI from './__prototype__/MenuUI';

import { faArrowLeft, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faHashtag, faMinus, faGear } from '@fortawesome/free-solid-svg-icons';

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

const SelectSetUI = ({title, selection, switchToMain, switchToUser, notifications}) => {

    const context = {
        "title"  : title,
        "icon"   : faList,
        "leftAction" : {
            "title"   : "Volver",
            "icon"    : faArrowLeft,
            "onClick" : switchToMain
        },
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

export default SelectSetUI;