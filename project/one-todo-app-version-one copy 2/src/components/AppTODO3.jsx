function AppTODO3(){
  let todoname = 'Go to College';
  let tododate ='14/11/2025'
  return (<div class="container">
    <div class="row kg-row">
        <div class="col-6">
          {todoname}
        </div>
        <div class="col-4">
         {tododate}
        </div>
      <div class="col-2">
        <button type="button" class="btn btn-success kg-button">delete</button>
      </div>
    </div>
  </div>
  );
}
export default AppTODO3;