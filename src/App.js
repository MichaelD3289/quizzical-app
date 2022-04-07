import React, {useContext} from 'react'
import Quiz from './component/Quiz'
// import {Link, Route} from 'react-router-dom'
import Home from './component/Home'
import './App.css';
import {Context} from './Context'

function App() {
  const {startQuiz} = useContext((Context))

  return (
    <div className="App">
       <div class="yellowBlob"></div>

        {!startQuiz && <Home />}
       {startQuiz && <Quiz />} 

      <div class="blueBlob"></div>
    </div>
  );
}

export default App;
