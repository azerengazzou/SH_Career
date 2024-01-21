import ReactGA from "react-ga";
import { Home } from "./HomePage";

const TRACKING_ID = "G-7B0TL00GDN";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div style={{ background: '#f5f5f5' }}>
      <Home />
    </div>
  );
}
export default App;
