import React from 'react';
import MainMenuUI from '../main_menu/MainMenuUI';

const MainMenuController = (props) => {
    const switchToKanjiToHiraganMode    = () => props.switchToGameMode("kanji_to_hiragana_game");
    const switchToTeFormMode            = () => props.switchToGameMode("te_form_game");
    const switchToDictionaryFormMode    = () => props.switchToGameMode("dictionary_form_game");
    const switchToNaiFormMode           = () => props.switchToGameMode("nai_form_game");
    const switchToTaFormMode            = () => props.switchToGameMode("ta_form_game");
    return (
        <MainMenuUI 
            switchToKanjiToHiraganMode={switchToKanjiToHiraganMode}
            switchToTeFormMode={switchToTeFormMode}
            switchToDictionaryFormMode={switchToDictionaryFormMode}
            switchToNaiFormMode={switchToNaiFormMode}
            switchToTaFormMode={switchToTaFormMode}
        />
    )
}

export default MainMenuController;