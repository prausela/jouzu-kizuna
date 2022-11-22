import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MenuContextActionUI = () => {
    return (
        <div className="bg-dark d-inline-block p-2">
            <div className="d-flex flex-column align-items-center">
                <div className="">
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" inverse/>
                </div>
                <div className="text-white">
                    Volver
                </div>
            </div>
        </div>
    )
}

export default MenuContextActionUI;