import React from 'react';
import MainMenuUI from '../main_menu/MainMenuUI';

const MainMenuController = (props) => {
    const switchToKanjiToHiraganMode    = () => props.switchToGameMode("kanji_to_hiragana_game");
    const switchToTeFormMode            = () => props.switchToGameMode("te_form_game");
    return (
        <MainMenuUI 
            switchToKanjiToHiraganMode={switchToKanjiToHiraganMode}
            switchToTeFormMode={switchToTeFormMode}
        />
    )
}

export default MainMenuController;