import React from 'react';
import { Button } from 'react-bootstrap';

import './MainMenuUI.css';

const MainMenuUI = (props) => {
    const switchToKanjiToHiraganMode    = props.switchToKanjiToHiraganMode;
    const switchToTeFormMode            = props.switchToTeFormMode;
    const switchToDictionaryFormMode    = props.switchToDictionaryFormMode;
    const switchToNaiFormMode           = props.switchToNaiFormMode;
    const switchToTaFormMode            = props.switchToTaFormMode;
    return (
        <>
            <div className="flex-grow-1 mode mode1 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToKanjiToHiraganMode} active>Kanjis</Button>
            </div>
            <div className="flex-grow-1 mode mode2 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToTeFormMode} active>Forma て</Button>
            </div>
            <div className="flex-grow-1 mode mode3 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToDictionaryFormMode} active>Forma じしょ</Button>
            </div>
            <div className="flex-grow-1 mode mode4 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToNaiFormMode} active>Forma ない</Button>
            </div>
            <div className="flex-grow-1 mode mode5 d-grid p-2">
                <Button variant="outline-dark" onClick={switchToTaFormMode} active>Forma た</Button>
            </div>
        </>
    )
}

export default MainMenuUI;