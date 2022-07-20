import React, { useState } from "react";
import logo from './aca.png';
import './App.css';

function App() {
  //properties
const [showFinalResults, setFinalResults] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const questions = [
  {
    text: "What is the git command that downloads your repository from GitHub to your computer?",
    options: [
      { id: 0, text: "A. git push", isCorrect: false },
      { id: 1, text: "B. git commit", isCorrect: false },
      { id: 2, text: "C. git fork", isCorrect: false },
      { id: 3, text: "D. git clone", isCorrect: true },
    ],
  },
  {
    text: "How do you create a copy of a lab under your own Github account so that you can solve the lab?",
    options: [
      { id: 0, text: "A. Forking it via the GitHub interface.", isCorrect: false },
      { id: 1, text: "B. git fork", isCorrect: true },
      { id: 2, text: "C. git clone", isCorrect: false },
      { id: 3, text: "D. git pull-request", isCorrect: false },
    ],
  },
  {
    text: "Before changes in a new files can be added to the Git directory, what command will tell Git to track our file in the list of changes to be committed?",
    options: [
      { id: 0, text: "A. git status", isCorrect: false },
      { id: 1, text: "B. git add", isCorrect: true },
      { id: 2, text: "C. git commit", isCorrect: false },
      { id: 3, text: "D. git init", isCorrect: false },
    ],
  },
  {
    text: "Which command would we use to review the commit history for our project?",
    options: [
      { id: 0, text: "A. git clone", isCorrect: false },
      { id: 1, text: "B. git status", isCorrect: false },
      { id: 2, text: "C. git config", isCorrect: false },
      { id: 3, text: "D. git log", isCorrect: true },
    ],
  },
  {
    text: "What's the command that you need to run to check what version of Git is currently installed in your computer?",
    options: [
      { id: 0, text: "A. git init", isCorrect: false },
      { id: 1, text: "B. git show version", isCorrect: false },
      { id: 2, text: "C. git commit", isCorrect: false },
      { id: 3, text: "D. git --version", isCorrect: true },
    ],
  },
];

//Functions
const optionClicked = (isCorrect: boolean) => {
  if(isCorrect){
    setScore(score + 1);
  }
if (currentQuestion + 1 < questions.length){
setCurrentQuestion(currentQuestion + 1);
}
else{
  setFinalResults(true);
} 
}

const restart = () => {
  setScore(0);
  setCurrentQuestion(0);
  setFinalResults(false);
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />
        {/* <a
          className="App-link"
          href="https://africacode.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Love ACA
        </a> */}

        {/* 1. Header */}
    <h1>Git Quiz</h1>
    

    {/* 2. Current Score */}
    <h2>Current Score: {score}</h2>

    {showFinalResults ? (

      /* 4. Final Results */
    <div className="final-results">
      <h1>Final Results</h1>
      <h2>{score} out of {questions.length} correct - ({(score/questions.length)*100}%) </h2>
      <p>
          1. What is the git command that downloads your repository from GitHub to your computer? - git clone <br></br><br></br>
         2. How do you create a copy of a lab under your own Github account so that you can solve the lab? - git fork<br></br><br></br>
          3. Before changes in a new files can be added to the Git directory, what command will tell Git to track our file in the list of changes to be committed? - git add <br></br><br></br>
          4. Which command would we use to review the commit history for our project? - git log <br></br><br></br>    
          5. What's the command that you need to run to check what version of Git is currently installed in your computer? - git --version  <br></br><br></br>
        

      </p>
      <button onClick={() => restart()}> Restart </button>
    </div> 
    ) : (

    /* 3. Question Card */
    <div className="question-card">
    <h2>Question {currentQuestion + 1} out of {questions.length} </h2>
    <h3 className="question-text">{questions[currentQuestion].text}</h3>

    <ul>
     {questions[currentQuestion].options.map((option) => {
      return (
          <li onClick={() =>optionClicked(option.isCorrect)} key={option.id}>{option.text}
        </li>
      );
     })}
    </ul>
   </div>
  )}
      </header>
    </div>
  );
}
export default App;