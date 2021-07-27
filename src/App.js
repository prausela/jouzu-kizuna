import { useState } from 'react';
import Interface from './UI/Interface';

// Services
import KanjiToHiraganaService from './logic/KanjiToHiraganaService';
import TeFormService from './logic/TeFormService';

const services = {
    "kanji_to_hiragana_game" : KanjiToHiraganaService,
    "te_form_game"           : TeFormService
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