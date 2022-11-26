import React, { useRef } from "react";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useWidth from "../Hooks/useWidth";

const QuickActionButtonUI = ({icon, name, show, disabled, className, style}) => {
    const ref = useRef(null);
    const height = useWidth(ref);

    const buttonSize = height > 0 ? (
        {
            height: height,
            minHeight: height
        }
    ) : ({});

    return (
        <Button
            variant="link"
            className={(className ? className + " " : "") + "text-dark text-decoration-none d-flex flex-column align-items-center justify-content-center" + (show ? "" : " invisible")}
            style={style}
            disabled={disabled}
        >
            <div className="bg-dark d-flex justify-content-center align-items-center w-100 text-white" ref={ref} style={{
                borderRadius: "50%",
                ...buttonSize
            }}>
                {
                    icon ? <FontAwesomeIcon icon={icon} className="m-0 text-very-big"/> : ""
                }
            </div>
            <div className="mt-2">
                {name ? name : ""}
            </div>
        </Button>
    )
}

export default QuickActionButtonUI;