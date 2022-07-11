<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>
        <h2 class="title">{{author}}</h2>
         <a-input-search
          v-model="todo"
          placeholder="请输入要代办的事项"
          size="large"
          @search="addTodo"
        >
          <template v-slot:enterButton>
            <a-button>新增</a-button>
          </template>
        </a-input-search>
         <h2 class="title">待办事项</h2>
        <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in todos" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, true)" />
          </template>
          {{item.content}}
        </a-card>
        <h2 class="title">已办事项</h2>
        <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in dones" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, false)" />
          </template>
          {{item.content}}
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex' 
let todo = ref('')
const time = `${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`

const store = useStore()

const author = store.state.author

// 添加待办事项
const addTodo = (value) => {
   console.log(todo.value);
  if(!value) {
    message.error('请输入待办事项')
    return
  }
  store.commit('setTodoList',{
    content:value,
    id:Date.now(),
    time,
    done:false
  })
  console.log(value);
  console.log(todo);
}

// 通过计算属性列出待办事项
const todos = computed(() => {
  return store.state.todoList.filter(i => i.done === false)
})

// 通过计算属性列出已办事项
const dones = computed(() => {
  return store.state.todoList.filter(i => i.done === true)
})

// 修改事项状态
const handleCheck = (item,status) => {
  item.done = status
}

</script>
<style>
 #components-layout-demo-basic {
    min-height: 100vh;
    max-width: 40%;
    margin: 0 auto;
    background-color: #ededed;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    text-align: center;
    color: #fff;
  }
  .title {
    margin: 0;
    padding: 10px;
  }
</style>