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

          <Dictionary defaultKeyword="wine" />

        </main>

        <footer className="App-footer">
              <a href="https://github.com/lizzyrowe1107/dictionary-project" target="_blank" rel="noreferrer" >
                <small>Coded by it's just liz</small>
              </a>
        </footer>

      </div>
    </div>
  );
}


