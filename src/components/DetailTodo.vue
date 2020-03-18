<template>
  <div class="DetailTodo">
    <div>
      <table class="table">
        <thead class="thead-light">
        <tr>
          <th scope="col">Trạng thái</th>
          <th scope="col">Tên</th>
          <th scope="col">Mô tả</th>
          <th scope="col">Ưu tiên</th>
          <th scope="col">Xóa</th>
        </tr>
        </thead>
        <tbody>
        <tr>

          <td>
            <span v-if="!todo.status"> Chưa xong</span>
            <span v-if="todo.status">Xong</span>
          </td>
          <td>{{todo.name}}</td>
          <td>{{todo.description}}</td>
          <td>
            <p class="mb-0" v-if="todo.rank== 1" style="color: red">Cao</p>
            <p class="mb-0" v-if="todo.rank == 0" style="color: orange">Trung Bình</p>
            <p class="mb-0" v-if="todo.rank == -1" style="color: greenyellow">Thấp</p>
          </td>
          <td>
            <label>
              <span class="glyphicon glyphicon-trash" v-on:click="deleteDetail(todo.id)"> </span>
            </label>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>

      <p>edit-todo</p>
      <form >
        <div class="form-group">
          <label for="exampleFormControlInput1">Name: </label>
          <input class="form-control" id="exampleFormControlInput1"
                 v-model="todo.name"  >
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Title: </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" type="text"
                    v-model="todo.description"></textarea>
        </div>
        <select  class="form-control form-control-lg"  v-model="todo.rank" >
          <option value="-1">Thấp</option>
          <option value="0">Trung bình</option>
          <option value="1">Cao</option>
        </select>
        <div class="form-group form-check">
          <input type="checkbox" class="checkbox" v-model="todo.status">
          <label class="form-check-label" v-if="!todo.status"> Chưa xong</label>
          <label class="form-check-label" v-else >Xong</label>
        </div>
        <br>
        <button type="submit" class="btn btn-primary" @click="updateDetai">Submit</button>
      </form>
    </div>
  </div>


</template>
<script>
  import todoService from '../service/todoService.Js'

  export default {
    name: 'DetailTodo',
    data() {
      return {
        todo: null,
        submited: false
      }
    },
    methods: {
      getDetail(id){
        todoService.detail(id).then(response =>{
          this.todo = response.data;
          console.log(this.todo);
        }).catch(error =>{
          console.log(error.response);
        })
      },
      updateDetai(){
        var data = {
          id: this.todo.id,
          name: this.todo.name,
          description: this.todo.description,
          rank: this.todo.rank,
          status: this.todo.status
        };
        todoService.edit(data).then(res => {
          data = res.data;
          console.log(data);
          console.log('thành công!');
          // alert('thành công!');
        }).catch(error => {
          console.log(error);
        });
        this.submited = true;
      },

      deleteDetail(id){
        todoService.deltete(id).then(res =>{
          console.log("thành công!")
          alert('thành công!')
          location.reload();
        }).catch(error => {
          console.log(error);
        })
      }
    },
    mounted() {
      this.getDetail(this.$route.params.id);
    }
  }
</script>
<style>

</style>
