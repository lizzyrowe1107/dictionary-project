import logo from './Monochrome.svg';
import './App.css';
import Dictionary from "./Dictionary.js"

export default function App() {
  return (
    <div className="App">

      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          
        </header>

        <main>

          <Dictionary />

        </main>

        <footer className="App-footer">
          <small>Coded by it's just liz</small>
        </footer>

      </div>
    </div>
  );
}


