import React from 'react';

import MenuContextActionUI from '../Menu/__prototype__/MenuContextActionUI';
import { faArrowLeft, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

const MenuUI = (props) => {
    const correct      = props.correct ? props.correct : 0;
    const incorrect    = props.incorrect ? props.incorrect : 0;
    const resetGame    = props.resetGame;
    const returnToMenu = props.returnToMenu;
    return (
        <div className="menu d-flex">
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
    )
}

export default MenuUI;