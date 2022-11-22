// From packages
import React from 'react';

// Proyect components
import AnswerUI from './AnswerUI';
import MenuUI from './MenuUI';

// Style files
import './GameUI.css';
import './TeFormUI.css';
import './GuessFormUI.css';

const GameUI = (props) => {
    const question = props.question ? props.question : "";
    const answers  = [
        { id: 1, text : props.ans1 ? props.ans1 : "", className : "ans1" }, 
        { id: 2, text : props.ans2 ? props.ans2 : "", className : "ans2" }, 
        { id: 3, text : props.ans3 ? props.ans3 : "", className : "ans3" }, 
        { id: 4, text : props.ans4 ? props.ans4 : "", className : "ans4" }, 
    ]
    const correct      = props.correct;
    const incorrect    = props.incorrect;
    const isCorrect    = props.isCorrect;
    const isIncorrect  = props.isIncorrect;
    const ansId        = props.ansId;
    const submitAnswer = props.submitAnswer;
    const resetGame    = props.resetGame;
    const returnToMenu = props.returnToMenu;
    return (
        <>
            <MenuUI 
                correct={correct} 
                incorrect={incorrect}
                resetGame={resetGame}
                returnToMenu={returnToMenu}
            />
            <div className="question">{question}</div>
            {
                answers.map(ans => {
                    return (
                    <AnswerUI 
                        text={ans.text} 
                        className={ans.className} 
                        isCorrect={isCorrect && ansId === ans.id}
                        isIncorrect={isIncorrect && ansId === ans.id}
                        key={ans.id}
                        id={ans.id}
                        submitAnswer={submitAnswer}
                    />
                )})
            }
        </>
    )
}

export default GameUI;