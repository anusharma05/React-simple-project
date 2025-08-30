import style from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  let ListButton = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id={style.buttoncontainer}>
        {ListButton.map((item) => (
          <button className={style.button}>{item}</button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
