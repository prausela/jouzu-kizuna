import { useState } from 'react';
import Interface from './UI/Interface';

// Services
import KanjiToHiraganaService from './logic/KanjiToHiraganaService';
import TeFormService from './logic/TeFormService';
import DictionaryFormService from './logic/DictionaryFormService';
import NaiFormService from './logic/NaiFormService';
import TaFormService from './logic/TaFormService';
import GuessFormService from './logic/GuessFormService';
import CountersService from './logic/CountersService';

const services = {
    "kanji_to_hiragana_game" : KanjiToHiraganaService,
    "te_form_game"           : TeFormService,
    "dictionary_form_game"   : DictionaryFormService,
    "nai_form_game"          : NaiFormService,
    "ta_form_game"           : TaFormService,
    "guess_form_game"        : GuessFormService,
    "counters_game"          : CountersService
};

const App = () => {
    const [ gameMode, setGameMode ] = useState("");
    
    return (
        <Interface 
            services={services}
            gameMode={gameMode}
            setGameMode={setGameMode}
        />
    )
}

export default App;