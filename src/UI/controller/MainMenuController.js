import React from 'react';
import MainMenuUI from '../view/Menu/MainMenuUI';

const MainMenuController = (props) => {
    const switchToKanjiToHiraganMode    = () => props.switchToGameMode("kanji_to_hiragana_game");
    const switchToTeFormMode            = () => props.switchToGameMode("te_form_game");
    const switchToDictionaryFormMode    = () => props.switchToGameMode("dictionary_form_game");
    const switchToNaiFormMode           = () => props.switchToGameMode("nai_form_game");
    const switchToTaFormMode            = () => props.switchToGameMode("ta_form_game");
    const switchToGuessFormMode         = () => props.switchToGameMode("guess_form_game");
    const switchToCountersMode          = () => props.switchToGameMode("counters_game");
    return (
        <MainMenuUI 
            switchToKanjiToHiraganMode={switchToKanjiToHiraganMode}
            switchToTeFormMode={switchToTeFormMode}
            switchToDictionaryFormMode={switchToDictionaryFormMode}
            switchToNaiFormMode={switchToNaiFormMode}
            switchToTaFormMode={switchToTaFormMode}
            switchToGuessFormMode={switchToGuessFormMode}
            switchToCountersMode={switchToCountersMode}
        />
    )
}

export default MainMenuController;