import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuContextActionUI from "./MenuContextActionUI";

const MenuContextUI = ({action, title, icon, className}) => {
    return (
        <div className={(className ? className + " " : "") + "position-relative"}>
            <MenuContextActionUI 
                icon={action ? action.icon : undefined}
                title={action ? action.title : undefined}
                onClick={action ? action.onClick : undefined}
                hasCtxAction={action ? true : false}
                className="d-inline-block"
            />
            <h1 className="d-inline-block position-absolute start-50 top-50 translate-middle text-extremely-big m-0 text-center fw-normal">{title}</h1>
            <div className="d-inline-block position-absolute end-0 top-50 translate-middle-y align-middle text-end">
                <FontAwesomeIcon icon={icon} className="text-very-big m-0 me-2"/>
            </div>
        </div>
    )
}

export default MenuContextUI;