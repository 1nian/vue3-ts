import { createStore } from "vuex";

export default createStore({
  state: {
    author:'yzhenshuai',
    todoList:[
      {
        id: 1,
        done: false,
        time:`${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`,
        content: '前往老八食堂，共进午餐'
      },
      {
        id: 2,
        done: false,
        time:`${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`,
        content: '和giao哥合唱一曲'
      },
      {
        id: 3,
        done: false,
        time:`${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`,
        content: '做点阳间的需求'
      }
    ]
  },
  mutations: {
    setTodoList(state,value) {
      state.todoList.push(value)
    }
  }
})