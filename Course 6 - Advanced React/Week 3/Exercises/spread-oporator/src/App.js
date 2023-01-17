import './App.css';

const Button = ({type, children, ...buttonProps}) =>{
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>  
  );
}

const LoginButton = ({type, children, ...buttonProps}) => {
  return(
    <Button
      type="secondary"
      {...buttonProps}
      onClick = {() => {
        alert("Logging In!")
      }}
      >
        {children}
      </Button>
  );
};

function App() {
  return (
    <div className="App">
      <header className='Header'>My Restaurant</header>
      <Button type='primary' onClick={() => alert("Signing In!")}>Sign Up</Button>
      <Button type='secondary' onClick={() => alert("Signing In!")}>Log In</Button>
    </div>
  );
}

export default App;
