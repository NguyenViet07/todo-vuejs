<template>

<div>
  <h1>My To do list</h1>

  <div class="submit-form">
    <form class="header" >
      <input type="text" placeholder="Tiêu đề" v-model="todo.name" name="name">
      <br>
      <br>
      <input type="text"  placeholder="Nội dung công việc" id="description"
             required v-model="todo.description" name="description" >
      <br>

      <select  class="form-control form-control-lg"  v-model="todo.rank" >
        <option value=""> -- Chọn mức độ ưu tiên cho công việc -- </option>
        <option value="-1">Thấp</option>
        <option value="0">Trung bình</option>
        <option value="1">Cao</option>
      </select>
      <input type="submit" class="addBtn" value="add" @click="Save">
      <br>
    </form>
    <br>
  </div>

  <div>
    <router-link to="/search" type="button" class="btn btn-outline-info" >Tìm kiếm</router-link>
    <router-link to="/todos" type="button" class="btn btn-outline-secondary"  > All </router-link>
    <router-link to="/hight" type="button" class="btn btn-outline-danger"  >Cao</router-link>
    <router-link to="/medium" type="button" class="btn btn-outline-warning" >Trung Bình</router-link>
    <router-link to="/low" type="button" class="btn btn-outline-success" >Thấp</router-link>
    <router-link to="/rank" type="button" class="btn btn-outline-primary"  >Sắp xếp</router-link>
  </div>
  <br>
</div>
</template>

<script>
  import todoService from '../service/todoService.Js'

  export default {
    name: 'CreateTodo',
    data() {
      return {
        todo: {
          name: "",
          description: "",
          rank: "",
          status: false
        },
        isSubmit: false
      }
    },
    methods: {
      Save() {
        if (!this.todo.name) {
          alert("chưa có tên! ")
        } else if (!this.todo.rank) {
          alert("chưa có mức độ ưu tiên")
        } else {
          todoService.create(this.todo).then(res => {
            // this.todo = res.data;
            alert("Thành Công! ")
            console.log(res.data);
          }).catch(error => {
            console.log(error);
          });
          this.isSubmit = true
        }
      }
    }

  }
</script>

<style>

  /* Style the header */
  .header {
    background-color: #f44336;
    padding: 30px 40px;
    color: white;
    text-align: center;
  }

  /* Clear floats after the header */
  .header:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Style the input */
  input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 100%;
    padding: 10px;
    float: left;
    font-size: 16px;
    color: black;
  }

  /* Style the "Add" button */
  .addBtn {
    padding: 10px;
    width: 25%;
    background: #d9d9d9;
    color: #555;
    float: left;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0;
  }

  .addBtn:hover {
    background-color: #bbb;
  }
</style>
