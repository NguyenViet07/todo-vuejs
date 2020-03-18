import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/todos",
      name: "todos",
      component: () => import("./components/ListTodos")
    },
    {
      path: "/todos/:id",
      name: "DetailTodo",
      component: () => import("./components/DetailTodo")
    },
    {
      path: "/todos",
      name: "CreateTodo",
      component: () => import("./components/CreateTodo")
    },
    {
      path: "/search",
      name: "Search",
      component: () => import("./components/Search")
    },
    {
      path: "/rank",
      name: "RankTodo",
      component: () => import("./components/RankTodo")
    },
    {
      path: "/low",
      name: "LowTodo",
      component: () => import("./components/LowTodo")
    },
    {
      path: "/medium",
      name: "MediumTodo",
      component: () => import("./components/MediumTodo")
    },
    {
      path: "/hight",
      name: "HightTodo",
      component: () => import("./components/HightTodo")
    }
  ]
});
