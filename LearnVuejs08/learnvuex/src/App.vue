<template>
  <div id="app">
    <h2>---------- APP内容: Modules中的内容 ----------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncUpdateName">异步修改</button>

    <h2>---------- APP内容: info对象的内容是否是响应式的 ----------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>---------- APP内容 ----------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>---------- APP内容: getters相关信息 ----------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgestu(12) }}</h2>

    <h2>---------- Hello Vuex 内容 ----------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {INCREMENT} from './store/mutations-type'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是 App 组件',
    }
  },
  computed: {
    more20stu() {
      return this.$store.state.students.filter(s => s.age >= 20);
    }
  },
  methods: {
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName');
    },
    updateName() {
      this.$store.commit('updateName', 'lisi');
    },
    updateInfo() {
      // this.$store.commit('updateInfo');
      // this.$store.dispatch('aUpdateInfo', '我是 payload');

      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了');
      //   }
      // });

      this.$store.dispatch('aUpdateInfo2', '我是携带的信息')
        .then(res => {
          // 里面完成了提交
          console.log(res);
        });
    },
    addStudent() {
      const stu = {id: 144, name: 'alin', age: 35}
      this.$store.commit('addStudent', stu);
    },
    addCount(count) {
      // - payload
      // -  1. 普通的提交封装
      // this.$store.commit('incrementCount', count);

      // -  2. 特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
