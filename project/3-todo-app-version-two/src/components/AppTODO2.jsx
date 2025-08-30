import style from './AppTODO2.module.css'
function AppTodo2({todoname,tododate}){
  return (<div className="container">
    <div className="row kg-row">
        <div className="col-6">
          {todoname}
        </div>
        <div className="col-4">
         {tododate}
        </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">delete</button>
      </div>
    </div>
  </div>
  );
}
export default AppTodo2;