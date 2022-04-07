import React, {useState, useEffect, useContext} from 'react'
import Answer from './Answer'
import {Context} from '../Context'

export default function Question({title, incorrect, correct}) {
  const {setAllAnswered} = useContext(Context)

  const [selected, setSelected] = useState({
    '0': false,
    '1': false,
    '2': false,
    '3': false
  })

  const [shuffledAnswers, setShuffledAnswers] = useState([])

  const toggleSelected = (event, index) => {
   
    if(document.querySelectorAll('.selected').length === 4) {
      setAllAnswered(true)
    }

    setSelected(prev => {
        for (let key in prev) {
          prev[key] = false
        }

        return {
          ...prev,
          [index]: true
        }
    })
  }

useEffect(() => {

  function shuffleAnswers() {
    const allAnswers = [...incorrect, correct]
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers
  }
  setShuffledAnswers(shuffleAnswers())
}, [])
 
 

  return(
    <div className="question">
      <h3>{title}</h3>
      <div className='answerContainer'>
        {shuffledAnswers.map((e, i ) => 
        (<Answer 
          key={title + e}
          answer={e}
          toggleSelected={toggleSelected}
          selected={selected[i]}
          index={i}
          correctAnswer={e === correct ? 'right' : 'wrong'}
        />))}
      </div>
    </div>
  )
}