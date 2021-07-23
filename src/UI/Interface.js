import React from 'react';
import './Interface.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerUI from './AnswerUI';
import MenuUI from './MenuUI';

const Interface = (props) => {
    const question = props.question ? props.question : "";
    const answers = [
        { id: 1, text : props.ans1 ? props.ans1 : "", className : "ans1" }, 
        { id: 2, text : props.ans2 ? props.ans2 : "", className : "ans2" }, 
        { id: 3, text : props.ans3 ? props.ans3 : "", className : "ans3" }, 
        { id: 4, text : props.ans4 ? props.ans4 : "", className : "ans4" }, 
    ]
    return (
        <div className="interface">
            <MenuUI />
            <div className="question">{question}</div>
            {
                answers.map(ans => (
                    <AnswerUI text={ans.text} className={ans.className} key={ans.id}/>
                ))
            }
        </div>
    )
}

export default Interface;