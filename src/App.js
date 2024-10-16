import './styles/app.css';
import ResolutionDisplay from './components/ResolutionDisplay';
import ScreenDetails from './components/ScreenDetails';
import LastUpdated from './components/LastUpdated';
import DeviceMotion from './components/DeviceMotion';
import ParallaxEffect from './components/ParallaxEffect';
import VoiceCommands from './components/VoiceCommands';
import ThemeSwitcher from './components/ThemeSwitcher';
import ColorDepth from './components/ColorDepth';
import ViewportSize from './components/ViewportSize';
import ScreenComparison from './components/ScreenComparison';
import FpsMeter from './components/FpsMeter';
import LiveWifiPing from './components/LiveWifiPing';
import LiveLocation from './components/LiveLocation';
import BatteryStatus from './components/BatteryStatus';
import NetworkStatus from './components/NetworkStatus';
import DeviceOrientation from './components/DeviceOrientation';
import FeedbackButton from './components/FeedbackButton';
import NetworkType from './components/NetworkType';
import DeviceInfo from './components/DeviceInfo';

function App() {
  return (
    <>
      <div className="content">
        <header className="App-header">
          <h1>Your Device Details</h1>
        </header>
        <main>
          <ThemeSwitcher />
          <ResolutionDisplay />
          <LiveWifiPing />
          <FpsMeter />
          <BatteryStatus />
          <NetworkStatus />
          <DeviceOrientation />
          <LiveLocation />
          <ViewportSize />
          <ScreenDetails />
          <ColorDepth />
          <DeviceMotion />
          <ParallaxEffect />
          <VoiceCommands />
          <ScreenComparison />
          <NetworkType />
          <DeviceInfo />
          <FeedbackButton />
        </main>
        <LastUpdated />
      </div>
    </>
  );
}

export default App;
