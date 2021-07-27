// From packages
import React, { useEffect, useState, useRef } from 'react';

// Proyect components
import GameUI from './game/GameUI';

// Services
import KanjiToHiraganaService from '../logic/KanjiToHiraganaService';

const GameController = (props) => {
    let gameData = useRef({});

    const [ correct, setCorrect ] = useState(0);
    const [ incorrect, setIncorrect ] = useState(0);

    const [ id, setId ] = useState("");
    const [ question, setQuestion ] = useState("");
    const [ ans1, setAns1 ] = useState("");
    const [ ans2, setAns2 ] = useState("");
    const [ ans3, setAns3 ] = useState("");
    const [ ans4, setAns4 ] = useState("");

    const returnToMenu = props.returnToMenu;

    const loadNextQuestion = () => {
        const nextQuestion = KanjiToHiraganaService.getNextQuestion(gameData.current.questions);
        setId(nextQuestion.id);
        setQuestion(nextQuestion.question);
        setAns1(nextQuestion.answers[0]);
        setAns2(nextQuestion.answers[1]);
        setAns3(nextQuestion.answers[2]);
        setAns4(nextQuestion.answers[3])
    }

    const submitAnswer = (selectedAns) => {
        const isCorrect = KanjiToHiraganaService.checkIfCorrectAnswer(id, selectedAns);
        if(isCorrect){
            setCorrect(correct+1);
        } else {
            setIncorrect(incorrect+1);
        }
        loadNextQuestion();
    }

    const resetGame = () => {
        setCorrect(0);
        setIncorrect(0);
    }

    useEffect(() => {
        gameData.current = KanjiToHiraganaService.startNewGame();
        loadNextQuestion()
    }, []);

    return (
        <GameUI 
            correct={correct} 
            incorrect={incorrect}
            question={question} 
            ans1={ans1} 
            ans2={ans2} 
            ans3={ans3} 
            ans4={ans4} 
            submitAnswer={submitAnswer}
            resetGame={resetGame}
            returnToMenu={returnToMenu}
        />
    )
}

export default GameController;