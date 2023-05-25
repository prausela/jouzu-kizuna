import React, { useEffect, useState } from 'react';

import MenuContextActionUI from '../Menu/__prototype__/MenuContextActionUI';
import { faArrowLeft, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const MenuUI = (props) => {
    const correct      = props.correct ? props.correct : 0;
    const incorrect    = props.incorrect ? props.incorrect : 0;
    const resetGame    = props.resetGame;
    const returnToMenu = props.returnToMenu;

    const [fontSizeIndicator, setFontSizeIndicator] = useState(100);

    const changeFontSize = (value) => {
        setFontSizeIndicator(value);
        let root = document.querySelector(":root");
        root.style.setProperty("--max-word-size-a", 7+(100-fontSizeIndicator)/10);
        root.style.setProperty("--max-word-size-q", 11+(100-fontSizeIndicator)/10);
        console.log(getComputedStyle(root).getPropertyValue("--max-word-size-a"));
    }

    return (
        <div className="menu">
            <div className="d-flex">
                <div className="flex-grow-1 flex-basis-0">
                    <MenuContextActionUI 
                        icon={faArrowLeft}
                        title="Volver"
                        onClick={returnToMenu} 
                        hasCtxAction
                    />
                </div>
                <div className="d-flex flex-grow-1">
                    <div className="flex-grow-1 px-1">
                            <div 
                                className="alert alert-success text-center"
                                style={{
                                    borderRadius : 0
                                }}
                            >
                                Bien<br />{correct}
                            </div>
                    </div>
                    <div className="flex-grow-1 px-1">
                        <div 
                            className="alert alert-danger text-center"
                            style={{
                                borderRadius : 0
                            }}
                        >
                            Mal<br />{incorrect}
                        </div>
                    </div>
                </div>
                <div className="flex-grow-1 d-flex justify-content-end align-items-start flex-basis-0">
                    <MenuContextActionUI 
                        icon={faRotateLeft}
                        title="Reset"
                        onClick={resetGame} 
                        hasCtxAction
                        onRight
                    />
                </div>
                
            </div>
            <div
                className="mx-5"
            >
                <RangeSlider 
                    variant='dark'
                    value={fontSizeIndicator}
                    onChange={e => changeFontSize(e.target.value)}
                    tooltipLabel={currentValue => `${currentValue}%`}
                    max={100}
                />
            </div>
        </div>
    )
}

export default MenuUI;