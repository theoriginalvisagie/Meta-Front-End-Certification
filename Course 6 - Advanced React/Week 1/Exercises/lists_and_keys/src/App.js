import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const ToDo = props =>{
    <tr>
      <td><label>{props.id}</label></td>
      <td><input /></td>
      <td><label>{props.createdAt}</label></td>
    </tr>
};

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '1800',
  },{
    id: 'todo2',
    createdAt: '1830',
  }]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) =>(
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
