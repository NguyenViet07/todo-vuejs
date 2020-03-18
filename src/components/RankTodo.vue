<template>

  <div class="RankTodo">
<!--    <div v-for=" (todo, i) of todosRank" >-->
<!--      <h1>{{todo.name}}</h1>-->
<!--    </div>-->
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
            <router-link :to="{ name: 'DetailTodo', params: { id: todo.id }}" type="span" class="glyphicon glyphicon-edit"  >  </router-link>
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

  </div>
</template>

<script>

  import todoService from '../service/todoService.Js'

  export default {
    name: 'RankTodo',
    data() {
      return {
        todo: null,
        todos: []
      }
    },
    methods: {

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
    mounted() {
      todoService.rank().then(res => {
        this.todos = res.data;
        console.log(res.data);
      }).catch(error => {
        console.log(error);
      })
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
