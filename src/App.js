import './styles/app.css';
import ResolutionDisplay from './components/ResolutionDisplay';
import ScreenDetails from './components/ScreenDetails';
import LastUpdated from './components/LastUpdated';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Screen Resolution Checker</h1>
        </header>
        <main>
          <ResolutionDisplay />
          <ScreenDetails />
          <LastUpdated />
        </main>
      </div>
    </>
  );
}

export default App;
