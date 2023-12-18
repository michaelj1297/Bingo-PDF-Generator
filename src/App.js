import logo from './logo.svg';
import './App.css';
import BingoCards from './components/BingoCards'


function App() {
  return (<>
    <div className="App">
      <header className="App-Body">
        <BingoCards />
      </header>
    </div>
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row d-flex justify-content-center"  >
          <div className="col-3">
            <span className="text-muted">For more information on the project, visit the <a href='https://github.com/michaelj1297/Bingo-PDF-Generator.git'>github repo</a>.</span>
          </div>
        </div>
      </div>
    </footer>
  </>);
}

export default App;
