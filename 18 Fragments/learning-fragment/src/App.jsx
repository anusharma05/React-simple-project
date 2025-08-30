// import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Errormessage from "./components/ErrorMess";
import Listitem from "./components/Listitem";

function App() {
  const list = ["roti", "daal", "Milk", "butter", "vegetables", "salad", "anu"];
  const name = ["Ayush", "Anu", "Ajit", "Anuj"];
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <Errormessage List={list}/>
        <Listitem List={list} Name={name}></Listitem>
      </Container>
      <Container>
        <p>Above is  the list of Healthy Food that is good for health well being</p>
      </Container>
    </>
  );
}
export default App;
