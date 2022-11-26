import React from "react";

import { Button } from "react-bootstrap";

const SelectionButtonUI = ({value, code, hasCode, className, style}) => {
    return (
        <div className="mb-5">
            
            <Button
                variant="dark"
                className={(className ? className + " " : "") + " w-100"}
            >
                <span className="text-extremely-big">{value}</span>
            </Button>
            {
                hasCode ? (
                    <div className="d-flex justify-content-end text-secondary mt-1 border rounded">
                        <div className="me-1">#</div>
                        <div className="me-2">No disponible</div>
                    </div>
                ) : ""
            }
            
            
        </div>
    )
}

export default SelectionButtonUI;