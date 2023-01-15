import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  React.useEffect(() => {
    document.title = toggle ? "Welcome One" : "Welcome Two"
  }, []);// [toggle]
  // The dependency array is there to watch for changes to a specific variable. Based on that, execute the function that's passed in as the first argument of the useEffect function call.

  return (
    <div className="App">
      <h1>The useEffect Hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {toggle && <h2>Welcome</h2>}
    </div>
  );
}

export default App;
