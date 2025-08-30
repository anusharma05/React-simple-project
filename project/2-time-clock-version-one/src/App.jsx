import Clock from "./components/AppName";
import Para from "./components/CompPara";
import Currenttime from "./components/CurrentTime";

function App() {
  return (
    <center className="Clock-container">
          <Clock/>
          <Para/>
          <Currenttime></Currenttime>
    </center>
  );
}
export default App;
