import logo from './logo.svg';
import Heading from './Heading';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Basics in the browser
        </a>
        <Heading/>
      </header>
      
    </div>
  );
}

// function Heading(){
//   let title = "This is some heading text";
//   return (
//     <h1>{title}</h1>
//   );
// };

export default App;

