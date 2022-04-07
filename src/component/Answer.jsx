import React, {useContext} from 'react'
import { Context } from '../Context'

export default function Answer({answer, toggleSelected, selected, index, correctAnswer}) {

const {showAnswers} = useContext(Context)

  return (
    <p 
    className={`answer${selected ? ' selected' : ''} ${correctAnswer} ${showAnswers ? 'show' : ''}`}
    onClick={(event) => toggleSelected(event, index)}
    name={index.toString()}
    >{answer}</p>
  )
}