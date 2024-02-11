import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuContextActionUI from "./MenuContextActionUI";

const MenuContextUI = ({leftAction, rightAction, title, icon, className}) => {
    return (
        <div className={(className ? className + " " : "") + "d-flex justify-content-between position-relative"}>
            <MenuContextActionUI 
                icon={leftAction ? leftAction.icon : undefined}
                title={leftAction ? leftAction.title : undefined}
                onClick={leftAction ? leftAction.onClick : undefined}
                hasCtxAction={leftAction ? true : false}
                className="d-inline-block"
            />
            <h1 className="d-inline-block position-absolute start-50 top-50 translate-middle text-extremely-big m-0 text-center fw-normal">
                <FontAwesomeIcon icon={icon} className="text-very-big m-0 me-4"/>
                {title}
            </h1>
            <MenuContextActionUI 
                icon={rightAction ? rightAction.icon : undefined}
                title={rightAction ? rightAction.title : undefined}
                onClick={rightAction ? rightAction.onClick : undefined}
                hasCtxAction={rightAction ? true : false}
                className="d-inline-block"
                onRight
                smallIcon
            />
        </div>
    )
}

export default MenuContextUI;