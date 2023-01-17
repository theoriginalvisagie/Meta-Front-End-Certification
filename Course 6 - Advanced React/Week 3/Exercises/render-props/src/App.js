import './App.css';
import { useEffect, useState } from 'react';

const DataFetcher = ( render, url) =>
{
  const [date, setData] = useState([]);

  useEffect(() => {
    if(url.includes("desserts")){
      setData(["cake","ice cream","pie","brownie"]);
    }else{
      setData(["water","soda","juice"]);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher 
      url='https://littlelemon/desserts'
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
}

const DrinksCount = () => {
  return (
    <DataFetcher 
      url='https://littlelemon/drinnks'
      render={(data) => <h3>{data.length} drink</h3>}
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className='Header'>Restaurant</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;
