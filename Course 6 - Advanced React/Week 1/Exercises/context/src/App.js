import logo from './logo.svg';
import './App.css';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p> Hello <span className='Username'>{user.name}</span></p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>BLog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>Heading 1</h2>
      <p>Paragraph 1</p>
      <p>Written By {user.name}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Root(){
  return <UserProvider>
    <App />
  </UserProvider>
}

export default App;
