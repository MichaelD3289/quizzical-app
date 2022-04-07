import React, {useContext} from "react"
import Question from './Question'
import {Context} from '../Context'
import Button from './Button'

export default function Quiz() {
  const {questions, handleAnswersClick, showAnswers, allAnswered, playAgain} = useContext(Context)

  const questionElements = questions.map(question => (
    <Question 
    key={question.question}
    title={question.question} 
    incorrect={question.incorrect_answers} 
    correct={question.correct_answer} 
    />
  ))

    const correctAnswers = document.querySelectorAll('.right.selected').length

  return(
    <main className="quiz">
      <div className="questionContainer">
        {questionElements}
      </div>
     {
     !showAnswers ?  
    <Button 
     width="250px" 
     height="55px" 
     text="Check Answers"
     onClick={handleAnswersClick}
     disabled={!allAnswered} 
     /> :
     <div className="finalScore">
     <p>You scored {correctAnswers}/5 correct answers</p>
     <Button 
     width="250px" 
     height="55px" 
     text="Play Again"
     onClick={playAgain}
     />
     </div>
    } 
       </main>
  )
}