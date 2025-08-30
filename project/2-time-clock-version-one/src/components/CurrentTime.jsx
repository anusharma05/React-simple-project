let Currenttime=()=>{
  let time = new Date();
    return (
  <p className="lead fw-semibold">This is current time: {time.toLocaleDateString()}-{""}{time.toLocaleTimeString()} </p>
  )
}
export default Currenttime;