// From packages
import React from 'react';

// Proyect components
import AnswerUI from './AnswerUI';
import MenuUI from './MenuUI';

// Style files
import './GameUI.css';

const GameUI = (props) => {
    const question = props.question ? props.question : "";
    const answerProps = [props.ans1, props.ans2, props.ans3, props.ans4].filter(x => x !== undefined);
    const answers = [...Array(answerProps.length).keys()].map(x => x+1).map(x => ({
        id: x,
        text: answerProps[x-1],
        className: "ans" + x
    }));
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
            <div className="question"><div><p><strong>{question}</strong></p></div></div>
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