import { useEffect, useState } from 'react';
import Interface from './UI/Interface';
import { useSelector } from 'react-redux';
import Alert from './UI/view/Alert';

// Services
import KanjiToHiraganaService from './logic/KanjiToHiraganaService';
import TeFormService from './logic/TeFormService';
import DictionaryFormService from './logic/DictionaryFormService';
import NaiFormService from './logic/NaiFormService';
import TaFormService from './logic/TaFormService';
import GuessFormService from './logic/GuessFormService';
import CountersService from './logic/CountersService';
import SyncService from './logic/SyncService';
import LoginUI from './UI/view/LoginUI';

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
    const [ isAuth, setIsAuth] = useState(false);
    
    const [ questionSet, setQuestionSet ]           = useState("");
    const [ questionCategory, setQuestionCategory ] = useState("");

    const [ notifications, setNotifications ] = useState([]);

    useEffect(() => {
        if (isAuth) {
            SyncService.updateLocalDatabase().then(() => {
                setNotifications(["Base de datos actualizada exitosamente"]);
                setTimeout(() => {
                    setNotifications([]);
                }, 5000);
            }
            ).catch(() => {
                setNotifications(["Trabajando con copia local"]);
                setTimeout(() => {
                    setNotifications([]);
                }, 5000);
            })
        }
    },[isAuth]);

    const isServiceWorkerInitialized = useSelector(
        state => state.serviceWorkerInitialized,
    );
    const isServiceWorkerUpdated = useSelector(
        state => state.serviceWorkerUpdated,
    );
    const serviceWorkerRegistration = useSelector(
        state => state.serviceWorkerRegistration,
    );
    navigator.serviceWorker.getRegistration().then()

    const updateServiceWorker = () => {
    const registrationWaiting = serviceWorkerRegistration.waiting;

    if (registrationWaiting) {
        registrationWaiting.postMessage({ type: 'SKIP_WAITING' });

        registrationWaiting.addEventListener('statechange', e => {
        if (e.target.state === 'activated') {
            window.location.reload();
        }
        });
    }
    };

    if (!isAuth) {
        return (
            <LoginUI 
                setIsAuth={setIsAuth}
            />
        );
    }
    
    return (
        <>
        {
            isServiceWorkerUpdated ? (
                <>
                    <Alert 
                        text="Hay una nueva versión disponible"
                        buttonText="Actualizar"
                        type={'SW_UPDATE'}
                        onClick={updateServiceWorker}
                    >
                        
                    </Alert>
                    <Interface 
                        services={services}
                        questionSet={questionSet}
                        setQuestionSet={setQuestionSet}
                        questionCategory={questionCategory}
                        setQuestionCategory={setQuestionCategory}
                        notifications={notifications}
                    />
                </>
                ) : (
                <Interface 
                    services={services}
                    questionSet={questionSet}
                    setQuestionSet={setQuestionSet}
                    questionCategory={questionCategory}
                    setQuestionCategory={setQuestionCategory}
                    notifications={notifications}
                />
            )
        }
        </>
    )
}

export default App;