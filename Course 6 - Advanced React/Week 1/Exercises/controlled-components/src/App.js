import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Number(score) <= 5 && comment.length <= 10){
      alert("Please provide a comment.");

      return;
    }

    setComment("");
    setScore("10");
  }

  return (
    <div className="App">
      <form>
        <fieldset>
          <h2>Feedback Form</h2>
          <button type="submit">Submit</button>
          <div className='Field'>
            <label>Score: {score}</label>
            <input type="range" min="0" max="10"value={score}  onChange={e => setScore(e.target.value)}/>
          </div>
          <div className='Field'>
            <label>Comment:</label>
            <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
