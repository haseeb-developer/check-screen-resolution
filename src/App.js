import './styles/app.css';
import ResolutionDisplay from './components/ResolutionDisplay';
import ScreenDetails from './components/ScreenDetails';
import LastUpdated from './components/LastUpdated';
import DeviceMotion from './components/DeviceMotion';
import ParallaxEffect from './components/ParallaxEffect';
import VoiceCommands from './components/VoiceCommands';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <>
      <div className="content">
        <header className="App-header">
          <h1>Screen Resolution Checker</h1>
        </header>
        <main>
          <ResolutionDisplay />
          <ScreenDetails />
          <LastUpdated />
          <DeviceMotion />
          <ParallaxEffect />
          <VoiceCommands />
          <ThemeSwitcher />
        </main>
      </div>
    </>
  );
}

export default App;
