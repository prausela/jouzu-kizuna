import React from "react";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const possibleDirections = new Set(["up", "down"]);

const SelectionScrollUI = ({scrollDirection, canScroll, invisible, className}) => {
    return (
        <div className={"d-flex justify-content-between" + (className ? " " + className : "") + (canScroll ? " text-dark" : " text-slightly-visible")}
        >
            {
                [...Array(3).keys()].map(key => <FontAwesomeIcon icon={scrollDirection === "down" ? faChevronDown : faChevronUp} size="lg" className={invisible || !possibleDirections.has(scrollDirection) ? " invisible" : "" } key={key}/>)
            }
        </div>
    )
}

export default SelectionScrollUI;