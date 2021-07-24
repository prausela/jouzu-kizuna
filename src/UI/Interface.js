import React from 'react';
import './Interface.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerUI from './AnswerUI';
import MenuUI from './MenuUI';

const Interface = (props) => {
    const question = props.question ? props.question : "";
    const answers  = [
        { id: 1, text : props.ans1 ? props.ans1 : "", className : "ans1" }, 
        { id: 2, text : props.ans2 ? props.ans2 : "", className : "ans2" }, 
        { id: 3, text : props.ans3 ? props.ans3 : "", className : "ans3" }, 
        { id: 4, text : props.ans4 ? props.ans4 : "", className : "ans4" }, 
    ]
    const correct      = props.correct;
    const incorrect    = props.incorrect;
    const submitAnswer = props.submitAnswer;
    const resetGame    = props.resetGame;
    return (
        <div className="interface">
            <MenuUI 
                correct={correct} 
                incorrect={incorrect}
                resetGame={resetGame}
            />
            <div className="question">{question}</div>
            {
                answers.map(ans => (
                    <AnswerUI 
                        text={ans.text} 
                        className={ans.className} 
                        key={ans.id}
                        submitAnswer={submitAnswer}
                    />
                ))
            }
        </div>
    )
}

export default Interface;