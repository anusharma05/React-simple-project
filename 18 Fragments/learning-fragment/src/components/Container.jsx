import style from './Container.module.css'
let Container =(props)=>{
  return (
    <div className={style.Container}>{props.children}</div>
  )
}
export default Container;