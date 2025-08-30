import styles from './Listitem.module.css';
function Listitem({List,Name})
{
  const HandleBuyButtonClick=(item,event)=>{
    console.log(event);
    console.log(`${item} being bought`);
  }
  return(
    <>
      <ul className="list-group-item list-unstyled">
        {List.map((item,index)=>(
          <li key={index} className={ `list-group-item ${styles["kg-item"]} no-bullets`}>{item}
          <button className={`btn btn-info ${styles.button}`}
          onClick={(e)=>HandleBuyButtonClick(item,e)}
          >buy</button></li>
        ))}
      </ul>
      <div>
        <ul className={` ${styles.names}`} id = {styles.anu}>
        {Name.map((item,index)=>(
          <li key={index} className={`list-group-item ${styles["kg-item"]}`}>{item}
          <button className={`btn btn-success ${styles.button}`}
          onClick={()=>console.log(`my name is ${item}`)}>Click</button></li>
        ))}
        </ul>
      </div>
   </>
  )
}
export default Listitem;