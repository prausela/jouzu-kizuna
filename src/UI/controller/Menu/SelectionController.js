import React, { useEffect, useState } from "react";
import SetLocalDao from "../../../data/access/local/SetLocalDao";
import SelectSetUI from '../../view/Menu/SelectSetUI';

const SelectionController = ({selectionId, title, switchToMain, switchToGameMode, switchToUser, notifications}) => {

    const [selection, setSelection] = useState(undefined);

    /* const selection = {
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
    } */

    useEffect(() => {
        SetLocalDao.getAllSets(selectionId).then((sets) => {
            setSelection(sets.filter(s => s.questions.length > 0).map(s => ({
                value   : s.name,
                onClick : () => switchToGameMode(s.id, selectionId)
            })));
        });
    }, [selectionId, switchToGameMode]);

    return (
        <SelectSetUI 
            switchToMain={switchToMain}
            switchToUser={switchToUser}
            title={title ? title : undefined}
            selection={selection ? selection : undefined}
            notifications={notifications}
        />
    )
}

export default SelectionController;