// From packages
import React, { useEffect, useState, useRef, useCallback } from 'react';

// Proyect components
import GameUI from '../views/game/GameUI';

const GameController = (props) => {
    let gameData = useRef({});

    const services    = props.services;
    const currService = props.gameMode;

    const [ correct, setCorrect ] = useState(0);
    const [ incorrect, setIncorrect ] = useState(0);

    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ isIncorrect, setIsIncorrect] = useState(false);

    const [ id, setId ] = useState("");
    const [ question, setQuestion ] = useState("");
    const [ ans1, setAns1 ] = useState("");
    const [ ans2, setAns2 ] = useState("");
    const [ ans3, setAns3 ] = useState("");
    const [ ans4, setAns4 ] = useState("");

    const [ ansId, setAnsId ] = useState(undefined);

    const returnToMenu = props.returnToMenu;

    const loadNextQuestion = useCallback(() => {
        const nextQuestion = services[currService].getNextQuestion(gameData.current);
        setId(nextQuestion.id);
        setQuestion(nextQuestion.question);
        setAns1(nextQuestion.answers[0]);
        setAns2(nextQuestion.answers[1]);
        setAns3(nextQuestion.answers[2]);
        setAns4(nextQuestion.answers[3])
    }, [services, currService]);

    const submitAnswer = (selectedAns, selectedAnsId) => {
        if(!ansId){
            const isCorrect = services[currService].checkIfCorrectAnswer(id, selectedAns);
            setAnsId(selectedAnsId);
            if(isCorrect){
                setCorrect(correct+1);
                setIsCorrect(true);
            } else {
                setIncorrect(incorrect+1);
                setIsIncorrect(true);
            }
            setTimeout(() => {
                setAnsId(undefined);
                setIsIncorrect(false);
                setIsCorrect(false);
                loadNextQuestion();
            }, 1000);
        }

    }

    const resetGame = () => {
        setCorrect(0);
        setIncorrect(0);
    }

    useEffect(() => {
        gameData.current = services[currService].startNewGame();
        loadNextQuestion()
    }, [services, currService, loadNextQuestion]);

    return (
        <GameUI 
            correct={correct} 
            incorrect={incorrect}
            question={question} 
            ans1={ans1} 
            ans2={ans2} 
            ans3={ans3} 
            ans4={ans4} 
            isCorrect={isCorrect}
            isIncorrect={isIncorrect}
            ansId={ansId}
            submitAnswer={submitAnswer}
            resetGame={resetGame}
            returnToMenu={returnToMenu}
        />
    )
}

export default GameController;