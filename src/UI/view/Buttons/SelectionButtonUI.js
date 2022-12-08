import React from "react";

import { Button } from "react-bootstrap";

const SelectionButtonUI = ({value, code, hasCode, className, style, onClick}) => {
    return (
        <div className="mb-5">
            
            <Button
                variant="dark"
                className={(className ? className + " " : "") + " w-100"}
                onClick={onClick}
            >
                <span className="text-very-big">{value}</span>
            </Button>
            {
                hasCode ? (
                    <div className="d-flex justify-content-end text-secondary mt-1 border rounded">
                        <div className="me-1">#</div>
                        <div className="me-2">Código no disponible</div>
                    </div>
                ) : ""
            }
            
            
        </div>
    )
}

export default SelectionButtonUI;