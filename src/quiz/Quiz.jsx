import { useState, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Question from "./Question.jsx";
import QUESTIONS from '../questions.js';
import Summary from "./Summary.jsx";
import Header from './Header.jsx';

import './Quiz.css'

export default function Quiz() {

 const [userAnswers, setUserAnswers] = useState([]);

 const activeQuestionIndex = userAnswers.length; 
 const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

 const navigate = useNavigate();

 function navigationHandler() {
 navigate('/quiz');
 }

 const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
) {
    setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
    });   
 }, 
 []
);

 const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null), 
    [handleSelectAnswer]);

 if (quizIsComplete) {
    return ( 
        <Summary userAnswers={userAnswers} />
    );
 }

    return (
        
        <div id="quiz" className="quiz-background">
  <Header />
     <Question 
     key={activeQuestionIndex}
     index={activeQuestionIndex}
     onSelectAnswer={handleSelectAnswer}
     onSkipAnswer={handleSkipAnswer}
     />
     <div className="quiz-footer">
        <Link to='/'>
                <button className="back-button" onClick={navigationHandler}>Back</button>
                </Link>
                <button className="refresh-button" onClick={() => window.location.reload()}>Refresh</button>
            </div>
         
        </div>
      
    );
}
