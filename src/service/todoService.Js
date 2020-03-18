import http from '../http';

class dataTodoList {

  getList() {
    return http.get("/todos");
  }
  create(data){
    return http.post("/todos", data)
  }
  edit(data){
    return http.put("/todos", data);
  }
  detail(id){
    return http.get("/todos/"+ id );
  }
  deltete(id){
    return http.delete("/todos/"+id);
  }
  search(name){
    return http.get("/todos?name=" +name)
  }
  rank(){
    return http.get("/todos/rank")
  }
  low(){
    return http.get("/todos/low")
  }
  medium(){
    return http.get("/todos/medium")
  }
  hight(){
    return http.get("/todos/hight")
  }

}
export default new dataTodoList();



