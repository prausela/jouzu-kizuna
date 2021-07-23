import React from 'react';
import {Button} from 'react-bootstrap';

const AnswerUI = (props) => {
    const className = props.className ? props.className + " d-grid p-2" : "d-grip p-2";
    const text = props.text;
    return (
        <div className={className}>
            <Button variant="outline-dark">{text}</Button>
        </div>
    )
}

export default AnswerUI;