import logo from './logo.svg';
import './App.css';

const Row = ({children}) => {

  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className='Row'>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {})
          }
        });
      })}
    </div>
  );
};

function App() {
  return (
    <div className='App' >
      <Row spacing={32}>
        <p>Pizza Maaragarita</p>
        <p>2</p>
        <p>305</p>
        <p>10:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default App;
