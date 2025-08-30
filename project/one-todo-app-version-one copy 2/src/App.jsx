import AppName from "./components/AppName";
import Apptodo from "./components/AppTODO1";
import AppTODO2 from "./components/AppTODO2";
import AppTODO3 from "./components/AppTODO3";
import "./App.css"
function App() {
  
  return ( 
  <center class="TODO-container">
    <AppName/>
    <Apptodo/>
    <div className="item-container">
      <AppTODO2/>
    <AppTODO3></AppTODO3>
    </div>
  </center>
  
  );
}

export default App;
