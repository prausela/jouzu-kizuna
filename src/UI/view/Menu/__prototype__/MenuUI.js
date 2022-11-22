import React from "react";
import MenuContextUI from "./MenuContextUI";
import MenuNotifierUI from "./MenuNotifierUI";
import MenuQuickActionsUI from "./MenuQuickActionsUI";
import MenuSelectionUI from "./MenuSelectionUI";

const MenuUI = () => {
    return (
        <>
            <MenuContextUI />
            <MenuNotifierUI />
            <MenuSelectionUI />
            <MenuQuickActionsUI />
        </>
    )
}

export default MenuUI;