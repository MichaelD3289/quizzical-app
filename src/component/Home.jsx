import React, {useContext} from 'react'
import Button from './Button'
import {Context} from '../Context'

export default function Home() {
  const {handleStartClick} = useContext(Context)
  return (
    
    <main id="home">
     
      <h1>Quizzical</h1>
      <p>Test your knowledge!</p>
      <Button 
      width="15rem" 
      height="4rem" 
      text="Start Quiz"
      onClick={handleStartClick}
      />

    </main>
  )
} 