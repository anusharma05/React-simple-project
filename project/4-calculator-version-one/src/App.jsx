import style from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
function App() {
  return (
    <>
      <div className={style.calculator}>
        <Display></Display>
        <ButtonContainer/>
  </div>
    </>
  );
}

export default App;
