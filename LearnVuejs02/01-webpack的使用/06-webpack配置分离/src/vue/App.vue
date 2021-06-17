<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
// import Cpn from './Cpn.vue'
// - 配置 extensions: ['.js', '.css', '.vue']
// - 省略后缀名
import Cpn from './Cpn'
export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: 'Hello, Webpack',
      name: 'orange'
    }
  },
  methods: {
    btnClick() {

    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>