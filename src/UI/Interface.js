import React from 'react';
import './Interface.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerUI from './AnswerUI';

const Interface = (props) => {
    const answers = [
        {text : props.ans1 ? props.ans1 : "", className : "ans1"}, 
        {text : props.ans2 ? props.ans2 : "", className : "ans2"}, 
        {text : props.ans3 ? props.ans3 : "", className : "ans3"}, 
        {text : props.ans4 ? props.ans4 : "", className : "ans4"}, 
    ]
    return (
        <div className="interface">
            <div className="menu"></div>
            <div className="question"></div>
            {
                answers.map(ans => (
                    <AnswerUI text={ans.text} className={ans.className}/>
                ))
            }
        </div>
    )
}

export default Interface;