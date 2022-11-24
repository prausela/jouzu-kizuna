
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const QuickActionButtonUI = ({icon, name, show, disabled, className, style}) => {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {

        const domWidth = ref.current.offsetWidth;

        setHeight(domWidth);

    }, []);

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
                    icon ? <FontAwesomeIcon icon={icon} className="m-0 display-3"/> : ""
                }
            </div>
            <div className="mt-2">
                {name ? name : ""}
            </div>
        </Button>
    )
}

export default QuickActionButtonUI;