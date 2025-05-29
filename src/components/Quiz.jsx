import { useCallback, useState } from "react";
import Questions from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === Questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => { 
            return [...prevAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (isQuizComplete) {
        return <Summary userAnswers ={userAnswers} />
    }

 return (
    <div id="quiz">   
        <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
        />    
    </div>
  );
}

export default Quiz;