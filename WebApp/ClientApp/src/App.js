import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar ></NavBar>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <h2>
          Game-Board
        </h2>
        <Button variant="contained" color="primary">
          Welcome
        </Button>
      </header>
    </div>
  );
}

export default App;
