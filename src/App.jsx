import ReactGA from "react-ga";

const TRACKING_ID = "G-7B0TL00GDN";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div >
      <Home />
    </div>
  );
}
export default App;
