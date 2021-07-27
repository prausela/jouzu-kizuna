import React from 'react';
import { Button } from 'react-bootstrap';

import './MainMenuUI.css';

const MainMenuUI = (props) => {
    const switchToGame = props.switchToGame;
    return (
        <>
            <div className="flex-grow-1 mode mode1 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToGame} active>Kanjis</Button>
            </div>
            <div className="flex-grow-1 mode mode2 d-grid p-2">
                <Button variant="outline-dark" disabled>Forma て<br /><em>(Pr&oacute;ximamente)</em></Button>
            </div>
        </>
    )
}

export default MainMenuUI;