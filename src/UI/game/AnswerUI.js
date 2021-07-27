import React from 'react';
import {Button} from 'react-bootstrap';

const AnswerUI = (props) => {
    const className     = props.className ? props.className + " d-grid p-2 ans" : "d-grip p-2 ans";
    const text          = props.text;
    const submitAnswer  = () => props.submitAnswer(text);
    return (
        <div className={className}>
            <Button variant="outline-dark" className="display-2" onClick={submitAnswer} active>{text}</Button>
        </div>
    )
}

export default AnswerUI;