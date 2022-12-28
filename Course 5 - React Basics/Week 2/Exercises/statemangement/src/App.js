import Counter from './components/Counter';
import MealsList from './components/MealsList';
import MealsProvider from './providers/MealsProvider';
import './App.css';

function App() {
  return (
    <div>
      <MealsProvider />
        <MealsList />
        <Counter />
      <MealsProvider />
    </div>
  );
}

export default App;
