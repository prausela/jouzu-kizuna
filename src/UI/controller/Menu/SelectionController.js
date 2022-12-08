import React from "react";
import SelectSetUI from '../../view/Menu/SelectSetUI';

const SelectionController = ({selectionId, switchToMain, switchToGameMode}) => {
    const selection = {
        "1" : {
            title   : "レベル　一",
            options : []
        },
        "2" : {
            title   : "レベル　ニ",
            options : [
                {
                    value   : "て",
                    onClick : () => switchToGameMode("te_form_game")
                },
                {
                    value   : "じしょ",
                    onClick : () => switchToGameMode("dictionary_form_game")
                },
                {
                    value   : "ない",
                    onClick : () => switchToGameMode("nai_form_game")
                },
                {
                    value   : "た",
                    onClick : () => switchToGameMode("ta_form_game")
                }
            ]
        },
        "3" : {
            title   : "レベル　三",
            options : [
                {
                    value   : "Contadores",
                    onClick : () => switchToGameMode("counters_game")
                },
                {
                    value   : "Kanjis",
                    onClick : () => switchToGameMode("kanji_to_hiragana_game")
                },
                {
                    value   : "Forma Correcta",
                    onClick : () => switchToGameMode("guess_form_game")
                }]
        }
    }
    return (
        <SelectSetUI 
            switchToMain={switchToMain}
            title={selection[selectionId] ? selection[selectionId].title : undefined}
            selection={selection[selectionId] ? selection[selectionId].options : undefined}
        />
    )
}

export default SelectionController;