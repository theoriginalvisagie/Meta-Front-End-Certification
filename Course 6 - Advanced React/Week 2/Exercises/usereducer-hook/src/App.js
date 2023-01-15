import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  if(action.type == 'buy_ingredients') return {money: state.money - 10};
  if(action.type == 'sell_a_meal') return {money: state.money + 10};
  if(action.type == 'celebrity') return {money: state.money + 5000};
  return state;
}

function App() {
  const initializeState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initializeState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type:'buy_ingredients'})}>Buy</button>
        <button onClick={() => dispatch({type:'sell_a_meal'})}>Sell</button>
        <button onClick={() => dispatch({type:'celebrity'})}>Celeb Visit</button>
      </div>
    </div>
  );
}

export default App;
