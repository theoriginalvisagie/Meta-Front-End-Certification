import logo from './logo.svg';
import './App.css';
import { stripBasename } from '@remix-run/router';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    setName("");
    console.log("Submitted");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor='name'>Name:</label>
            <input id="name" name='name' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <button type="submit" disabled={!name} >Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
