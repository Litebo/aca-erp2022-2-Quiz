import React, { useState } from "react";
import logo from './aca.png';
import './App.css';

function App() {
  //properties
const [showFinalResults, setFinalResults] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [currentAnswer, setAnswer] = useState(0);
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
    text: "Git is the same as GitHub?",
    options: [
      { id: 0, text: "A. True", isCorrect: false },
      { id: 1, text: "B. False", isCorrect: true },
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
const answers = [{
  text: "What is the git command that downloads your repository from GitHub to your computer"
  ,
  options: [
    { id: 0, text: "git clone", isCorrect: false },
    { id: 1, text: "EXPLANATION", isCorrect: false },
    { id: 2, text: "DONE", isCorrect: true },
  ],

}
]


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
  if(isCorrect){
    setAnswer(currentAnswer + 1);
  }else {
    setFinalResults(true);
  }
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

    {/*1.Header */}
    <h2> Git Quiz </h2>       
    {/* 2. Current Score */}
      <h3> Current Score: {score} </h3>
    {showFinalResults ? (

      /* 4. Final Results */
    <div className="final-results">
      <h1>Final Results</h1>
      <h2>{score} out of {questions.length} correct - ({(score/questions.length)*100}%) </h2>
      <p>
         What is the git command that downloads your repository from GitHub to your computer? - git clone <br></br><br></br>
         Git is the same as GitHub? - False<br></br><br></br>
         Before changes in a new files can be added to the Git directory, what command will tell Git to track our file in the list of changes to be committed? - git add <br></br><br></br>
         Which command would we use to review the commit history for our project? - git log <br></br><br></br>    
         What's the command that you need to run to check what version of Git is currently installed in your computer? - git --version  <br></br><br></br>
         
</p>
      {/* 
      <h3>Question {currentQuestion + 1} out of {questions.length} </h3>
      <h3 className="question-text">{answers[currentAnswer].text}</h3>

<ul>
{answers[currentAnswer].options.map((option) => {
 return (
     <li onClick={() =>optionClicked(option.isCorrect)} key={option.id}>{option.text}
   </li>
 );
})}
</ul> */}

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
  )}</header>
      </div> //
        );
}
export default App;