import logo from './logo.svg';
import './App.css';
import SmartHomeUI from './SmartUI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to our Software Testing Project
        </p>
       <SmartHomeUI/>
      </header>
    </div>
  );
}

export default App;
