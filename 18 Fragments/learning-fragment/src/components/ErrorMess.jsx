import styles from './ErrorMess.module.css';

let Errormessage = ({List})=>{
  return(
    <>
     {List.length === 0 && <h1>I am still hungry</h1> }
     {/* {List.length === 0? <h1 className={styles["kg-header"]}><span className={styles["kg-span"]}>i am a girl</span></h1>:null } */}
    </>
  )
};
export default Errormessage;