import React, { useEffect, useState, useRef } from 'react';
import KanjiToHiraganaService from './logic/KanjiToHiraganaService';

import Interface from './UI/Interface';

const App = () => {
    let gameData = useRef({});

    const [ correct, setCorrect ] = useState(0);
    const [ incorrect, setIncorrect ] = useState(0);

    const [ question, setQuestion ] = useState("");
    const [ ans1, setAns1 ] = useState("");
    const [ ans2, setAns2 ] = useState("");
    const [ ans3, setAns3 ] = useState("");
    const [ ans4, setAns4 ] = useState("");

    const loadNextQuestion = () => {
        const nextQuestion = KanjiToHiraganaService.getNextQuestion(gameData.current.questions);
        setQuestion(nextQuestion.question);
        setAns1(nextQuestion.answers[0]);
        setAns2(nextQuestion.answers[1]);
        setAns3(nextQuestion.answers[2]);
        setAns4(nextQuestion.answers[3])
    }

    const submitAnswer = (selectedAns) => {
        const isCorrect = KanjiToHiraganaService.checkIfCorrectAnswer(question, selectedAns);
        if(isCorrect){
            setCorrect(correct+1);
        } else {
            setIncorrect(incorrect+1);
        }
        loadNextQuestion();
    }

    useEffect(() => {
        gameData.current = KanjiToHiraganaService.startNewGame();
        loadNextQuestion()
    }, []);

    return (
        <Interface correct={correct} incorrect={incorrect} question={question} ans1={ans1} ans2={ans2} ans3={ans3} ans4={ans4} submitAnswer={submitAnswer}/>
    )
}

export default App;