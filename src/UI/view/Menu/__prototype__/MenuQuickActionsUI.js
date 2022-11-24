import React from "react";

import QuickActionButtonUI from "../../Buttons/QuickActionButtonUI";

const MenuQuickActionsUI = ({actions, className}) => {
    return (
        <div className={(className ? className + " " : "") + "d-flex align-items-center justify-content-between"}>
            {
                actions ? actions.map((action, index) => {
                    return action.show ? (
                        <QuickActionButtonUI 
                            name={action.name}
                            icon={action.icon}
                            className="flex-grow-1 flex-shrink-1"
                            style={{
                                flexBasis: 0,
                                maxWidth: "8rem"
                            }}
                            show={action.show}
                            disabled={action.disabled}
                            key={index}
                        />) : (
                        <QuickActionButtonUI
                            className="flex-grow-1 flex-shrink-1"
                            style={{
                                flexBasis: 0,
                                maxWidth: "8rem"
                            }}
                            show={action.show}
                            disabled={action.disabled}
                            key={index}
                        />
                    )
                }) : ""
            }
        </div>
    )
}

export default MenuQuickActionsUI;