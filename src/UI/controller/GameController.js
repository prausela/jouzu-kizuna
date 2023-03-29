// From packages
import React, { useEffect, useState, useRef, useCallback } from 'react';
import GameService from '../../logic/GameService';

// Proyect components
import GameUI from '../view/Game/GameUI';

const GameController = (props) => {
    let gameData = useRef();

    const currSet       = props.questionSet;
    const currCategory  = props.questionCategory;

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
        GameService.getNextQuestion(currCategory, currSet, 4, gameData.current).then((nextQuestion) => {
            setId(nextQuestion.id);
            setQuestion(nextQuestion.question);
            setAns1(nextQuestion.answers[0] ? nextQuestion.answers[0].name : undefined);
            setAns2(nextQuestion.answers[1] ? nextQuestion.answers[1].name : undefined);
            setAns3(nextQuestion.answers[2] ? nextQuestion.answers[2].name : undefined);
            setAns4(nextQuestion.answers[3] ? nextQuestion.answers[3].name : undefined);
        });
    }, [currSet, currCategory, gameData]);

    const submitAnswer = (selectedAns, selectedAnsId) => {
        if(!ansId){
            GameService.checkIfCorrectAnswer(currCategory, currSet, id, selectedAns).then(isCorrect => {
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
            });
        }

    }

    const resetGame = () => {
        setCorrect(0);
        setIncorrect(0);
    }

    useEffect(() => {
        GameService.startNewGame(currCategory, currSet).then(startData => {
            gameData.current = startData;
            loadNextQuestion();
        });
    }, [currCategory, currSet, loadNextQuestion]);

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