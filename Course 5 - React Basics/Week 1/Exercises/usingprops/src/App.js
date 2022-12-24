// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <div>
      <Header name="Anna" color="Purple" className="header"/>
      <Main greet="Howdy" className="main"/>
      <Sidebar greet="Hi" className="sidebar"/>
    </div>
    
  );
}

export default App;
