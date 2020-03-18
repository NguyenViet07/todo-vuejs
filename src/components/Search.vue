<template>
<div id="Search">
  <div >
    <input type="text" class="form-control" v-model="name" v-on:keyup.enter="searchTodo">
    <br>
    <button type="submit" class="btn btn-info" @click="searchTodo" ><span class="glyphicon glyphicon-search">
    </span> Search</button>
    <br>
  </div>
  <div class="container-fluid">
    <div class="row">
      <table class="table" v-if="todos.length > 0" >
        <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Tên</th>
          <th scope="col">Mô tả</th>
          <th scope="col">Ưu tiên</th>
          <th scope="col">Chỉnh sửa</th>
          <th scope="col">Xóa</th>
        </tr>
        </thead>
        <tbody v-for="(todo, i) of todos">
        <tr>
          <th scope="row">
            <input type = "checkbox" v-model="todo.status" @click="editStatus(i)" >
          </th>
          <td>
            <span v-if="!todo.status"> Chưa xong</span>
            <span v-if="todo.status">Xong</span>
          </td>
          <td>{{todo.name}}</td>
          <td>{{todo.description}}</td>
          <td>
            <p class="mb-0" v-if="todo.rank== 1" style="color: red" >Cao</p>
            <p class="mb-0" v-if="todo.rank == 0" style="color: orange">Trung Bình</p>
            <p class="mb-0" v-if="todo.rank == -1" style="color: greenyellow">Thấp</p>
          </td>
          <td>
            <label >
              <router-link :to="{ name: 'DetailTodo', params: { id: todo.id }}"  class="glyphicon glyphicon-edit"  >  </router-link>
            </label>
          </td>
          <td>
            <label >
              <span class="glyphicon glyphicon-trash" @click="deleteDetail(todo.id)"> </span>
            </label>
          </td>
        </tr>
        </tbody>
      </table>
            <h2 v-if="todos.length == 0" >Không có công việc nào</h2>
    </div>
  </div>
</div>

</template>

<script>
  import todoService from '../service/todoService.Js'
  export default {
    name: "Search",
    data(){
      return{
        todo: null,
        todos: [],
        name:""
      }
    },
    methods: {
      searchTodo(){
        console.log(this.name)
        todoService.search(this.name).then(res => {
          this.todos = res.data;
          console.log(this.todos);
        }).catch(error =>{
          console.log(error);
        })
      },
      editStatus(i) {
        var data = {
          id: this.todos[i].id,
          name: this.todos[i].name,
          description: this.todos[i].description,
          rank: this.todos[i].rank,
          status: !this.todos[i].status
        };
        todoService.edit(data).then(res => {
          this.todo = res.data;
          alert("Đã đổi trạng thái! ");
          console.log(this.todo)
        }).catch(error => {
          console.log(error);
        });
      },
      deleteDetail(id){
        todoService.deltete(id).then(res =>{
          console.log("thanh cong!");
          alert("xóa thành công! ")
          location.reload();
        }).catch(error => {
          console.log(error);
        })
      }
    },
  }
</script>

<style>

</style>
