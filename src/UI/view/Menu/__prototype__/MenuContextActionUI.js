import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

const MenuContextActionUI = ({icon, title, hasCtxAction, className, style}) => {
    return (
        <>
            {
                hasCtxAction ? (
                    <div 
                        className={className}
                        style={style}
                    >
                        <Button 
                            variant="dark"
                            className="align-middle"
                            style={{
                                minHeight: "4.2rem",
                                maxHeight: "4.2rem",
                                borderSizing: "border-box",
                                borderRadius: 0
                            }}
                        >
                            <div><FontAwesomeIcon icon={icon} className="h3 m-0"/></div>
                            <div><small>{title}</small></div>
                        </Button>
                    </div>
                ) : (
                    <span
                        className={className + " align-middle"}
                        style={{
                            minHeight: "4.2rem",
                            maxHeight: "4.2rem",
                            ...style
                        }}
                    />
                )
            }
        </>
        
        
    )
}

export default MenuContextActionUI;