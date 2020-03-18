<template>

  <div class="ListTodos">
      <input type="text" class="form-control" placeholder="Search..." v-model="name"   @click="searchTodo" >
<div>
  <table class="table">
    <thead>
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
    <tbody v-for=" (todo, i) of todos" >
    <tr>

      <th >
        <input type = "checkbox" v-model="todo.status" @click="editStatus(i)">
      </th>
      <td>
        <span v-if="!todo.status"> Chưa xong</span>
        <span  v-if="todo.status">Xong</span>
      </td>
      <td >{{todo.name}}</td>
      <td>{{todo.description}}</td>
      <td>
        <p class="mb-0" v-if="todo.rank== 1" style="color: red" >Cao</p>
        <p class="mb-0" v-if="todo.rank == 0" style="color: orange">Trung Bình</p>
        <p class="mb-0" v-if="todo.rank == -1" style="color: greenyellow">Thấp</p>
      </td>
      <td>
        <label >
          <router-link :to="{ name: 'DetailTodo', params: { id: todo.id }}" type="span" class="glyphicon glyphicon-edit" >  </router-link>
        </label>
      </td>
      <td>
        <label >
          <span class="glyphicon glyphicon-trash" @click="deleteDetail(todo.id)">  </span>
        </label>
      </td>
    </tr>
    </tbody>
  </table>
  <h2 v-if="todos.length == 0" >Không có công việc nào</h2>
</div>

  </div>
</template>

<script>

  import todoService from '../service/todoService.Js'

  export default {
    name: 'ListTodos',
    data() {
      return {
        todo: null,
        todos: [],
        name:""
      }
    },
    methods: {
      // getAll() {
      //   todoService.getList().then(res => {
      //     this.todos = res.data;
      //     console.log(res.data);
      //   }).catch(error => {
      //     console.log(error);
      //   })
      // },
      editStatus(i) {
        var data = {
          id: this.todos[i].id,
          name: this.todos[i].name,
          description: this.todos[i].description,
          rank: this.todos[i].rank,
          status: !this.todos[i].status
        };

        todoService.edit(data).then(res => {
          data = res.data;
          if (this.todos[i].status == true) {
            alert("đã xong việc");
          } else {
            alert("chưa xong việc");
          }
          // alert("đã đổi trạng thái");
          console.log(this.todos[i])
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
    // mounted() {
    //  this.getAll()
    // },
    computed :{
      searchTodo(){
        console.log(this.name)
       return todoService.search(this.name).then(res => {
          this.todos = res.data;
          console.log(this.todos);
        }).catch(error =>{
          console.log(error);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
