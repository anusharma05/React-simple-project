import AppName from "./components/AppName";
import Apptodo from "./components/AppTODO1";
import "./App.css"
import Todoitem from "./components/TodoItems";
function App() {
  const todoitems = [{
    name:"Buy Milk",
    duedate:"14/11/2005"
  },
  {
    name:"Go to College",
    duedate:"14/11/2005"

  }]
  
  return ( 
  <center class="TODO-container">
    <AppName/>
    <Apptodo/>
    <Todoitem todoitems = {todoitems}></Todoitem>
  </center>
  
  );
}

export default App;
