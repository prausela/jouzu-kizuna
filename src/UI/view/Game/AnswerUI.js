import React from 'react';
import { Button } from 'react-bootstrap';

const AnswerUI = (props) => {
    const isCorrect     = props.isCorrect ? props.isCorrect : false;
    const isIncorrect   = props.isIncorrect ? props.isIncorrect : false;
    const className     = props.className ? props.className + " p-2 ans" : "d-grip p-2 ans";
    const text          = props.text;
    const id            = props.id;
    const submitAnswer  = () => props.submitAnswer(text, id);
    return (
        <div className={className}>
            <Button variant={isCorrect ? "outline-success" : isIncorrect ? "outline-danger" : "outline-dark"} onClick={submitAnswer} active><p><strong>{text}</strong></p></Button>
        </div>
    )
}

export default AnswerUI;