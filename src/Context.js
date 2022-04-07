import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const Context = createContext()

export default function ContextProvider({children}) {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([])
  const [showAnswers, setShowAnswers] = useState(false)
  const [allAnswered, setAllAnswered] = useState(false)
  
  function playAgain() {
    setStartQuiz(false)
    setShowAnswers(false)
    setAllAnswered(false)
  }

  useEffect(() => {

    if(startQuiz) return
    axios 
      .get('https://opentdb.com/api.php?amount=5&category=17&type=multiple&encode=url3986')
      .then(res => {
        const {results} = res.data
       

      const decodedResults =  results.map(element => {
          const {incorrect_answers, question, correct_answer} = element

          const decodedIncorrect = incorrect_answers.map(each => decodeURIComponent(each))
         return {
            incorrect_answers: decodedIncorrect,
            question: decodeURIComponent(question),
            correct_answer: decodeURIComponent(correct_answer)
          }
        })
        setQuestions(decodedResults)
      })
      .catch(err => console.log(err))


  }, [startQuiz])

const handleStartClick = () => {
  setStartQuiz(true)
}

const handleAnswersClick = () => {
  setShowAnswers(true)
}

  return (
    <Context.Provider value={{
        startQuiz, 
        handleStartClick,
        questions,
        setQuestions,
        showAnswers,
        handleAnswersClick,
        allAnswered,
        setAllAnswered,
        playAgain
      }}
      >
      {children}
    </Context.Provider>
  )
}