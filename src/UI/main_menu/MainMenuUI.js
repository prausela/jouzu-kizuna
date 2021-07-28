import React from 'react';
import { Button } from 'react-bootstrap';

import './MainMenuUI.css';

const MainMenuUI = (props) => {
    const switchToKanjiToHiraganMode    = props.switchToKanjiToHiraganMode;
    const switchToTeFormMode            = props.switchToTeFormMode;
    return (
        <>
            <div className="flex-grow-1 mode mode1 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToKanjiToHiraganMode} active>Kanjis</Button>
            </div>
            <div className="flex-grow-1 mode mode2 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToTeFormMode} active>Forma て</Button>
            </div>
        </>
    )
}

export default MainMenuUI;