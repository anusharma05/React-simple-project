import style from './TodoItems.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import AppTodo2 from "./AppTODO2";
const Todoitem = ({todoitems})=>{
  return (<>
    <div className={style.itemcontainer}>
      {todoitems.map(item=>
     <AppTodo2 tododate={item.duedate} todoname = {item.name}></AppTodo2>
      )}
  </div>
  </>)
}
export default Todoitem;