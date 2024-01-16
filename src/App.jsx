import ReactGA from "react-ga";
import { FAQ } from "./components";
import Builder from "./pages/Builder";

const TRACKING_ID = "G-7B0TL00GDN";
ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <div>
      <FAQ />
      <Builder/>
    </div>
  );
}
export default App;
