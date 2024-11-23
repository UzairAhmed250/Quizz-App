import React, { useState } from 'react';
import "./style.css";
import { questions} from "../../array/index"

function Quizz1() {
    const [index , setIndex] = useState(0);
    const [question, setQuestion] = useState(questions[index]);
    const [next, setNext] = useState(false)


    const handleCheck = (e,answer)=> {
    if( next === false){
        if (question.answer===answer){
            e.target.classList.add("correct");
            setNext(true);
            
        }
        else{
            e.target.classList.add("wrong");
            setNext(true);
        }

    }
    
    }


   
  return (
    <div className='main_class'>
        <div className='child_class_1'>
            <div className='quiz_div'>Simple Quiz</div>
        </div>
        <div className='child_class_2'>
            <div className='question_class'>
                {index+1}. {question.question}. 
            </div>
            <div className='answer_main _class'>
            <div style={{

          cursor: next ? 'not-allowed' : '',}}
            onClick = {(e) =>{handleCheck(e,1)}} className='answer_class'>{question.option1}</div>
            <div onClick = {(e) =>{handleCheck(e,2)}} className='answer_class'>{question.option2}</div>
            <div onClick = {(e) =>{handleCheck(e,3)}} className='answer_class'>{question.option3}</div>
            <div onClick = {(e) =>{handleCheck(e,4)}} className='answer_class'>{question.option4}</div>
            </div>
        </div>
        <button  style={{
          display: next ? 'block' : 'none',
          cursor: next ? 'not-allowed' : '', // If next is true, display: block, else display: none
        }} className='next_class'>Next</button>
    </div>
  )
}

export default Quizz1