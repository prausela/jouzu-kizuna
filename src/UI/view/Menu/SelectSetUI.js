import React from 'react';

import MenuUI from './__prototype__/MenuUI';

import { faArrowLeft, faList } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faHashtag, faMinus, faGear } from '@fortawesome/free-solid-svg-icons';

const context = {
    "title"  : "レベル 1",
    "icon"   : faList,
    "action" : {
        "title" : "Volver",
        "icon"  : faArrowLeft
    }
}

const quickActions = [
    {
        "name"      : "Nuevo",
        "icon"      : faPlus,
        "show"      : true,
        "disabled"  : true
    }, {
        "name"      : "Agregar",
        "icon"      : faHashtag,
        "show"      : true,
        "disabled"  : true
    }, {
        "name"      : "Quitar",
        "icon"      : faMinus,
        "show"      : true,
        "disabled"  : true
    }, {
        "name"      : "Ajustes",
        "icon"      : faGear,
        "show"      : true,
        "disabled"  : true
    }
]

const SelectSetUI = () => {
    return (
        <MenuUI 
            context={context}
            quickActions={quickActions}
        />
    )
}

export default SelectSetUI;