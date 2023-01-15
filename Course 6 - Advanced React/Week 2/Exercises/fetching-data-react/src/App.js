import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.jason())
      .then(data => setUser(data));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className="App">
      <h1>Data Returned</h1>
      <h2>First Name: {user.results[0].name.fist}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Dat pending...</h1>
  );
}

export default App;
