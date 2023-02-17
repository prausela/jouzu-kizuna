import React from "react";

import SelectionButtonUI from "../Buttons/SelectionButtonUI";

const MenuSelectionUI = ({options, className, style, endOfPageRef}) => {
    return (
        <div className={(className ? className + " " : "") + "px-5 d-flex flex-column"} style={style}>
            <div className="flex-grow-1">
                {
                    options ? options.map((option, index) => (
                        <SelectionButtonUI 
                            value={option ? option.value : undefined}
                            onClick={option ? option.onClick : undefined}
                            key={index}
                        />
                    )) : ""
                }
                <span id="endOfPage" ref={endOfPageRef}/>
            </div>
            
        </div>
    )
}

export default MenuSelectionUI;