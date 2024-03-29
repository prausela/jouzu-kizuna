import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

const MenuContextActionUI = ({icon, title, onClick, hasCtxAction, onRight, className, style, smallIcon}) => {
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
                            className="align-middle px-3 py-2"
                            onClick={onClick}
                            style={{
                                minHeight: "4.2rem",
                                maxHeight: "4.2rem",
                                borderSizing: "border-box",
                                borderRadius: 0,
                                clipPath: onRight ? "polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%)" : "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)"
                            }}
                        >
                            <div><FontAwesomeIcon icon={icon} className={(smallIcon ? "h6 " : "h3 ") + "m-0"}/></div>
                            <div><small>{title}</small></div>
                        </Button>
                    </div>
                ) : (
                    <span
                        className={className + " align-middle px-3 py-2"}
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