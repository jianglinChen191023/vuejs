<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息, 嘿嘿嘿</p>
    <h3>{{ userId }}</h3>
    <h3>{{ $route.params.userId }}</h3>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  methods:{
    btnClick(){
      console.log(this.$router);
      // 当前活跃的路由
      console.log(this.$route);
      // 当前活跃路由的路径
      console.log(this.$route.path);
      // 当前活跃路由附带的参数
      console.log(this.$route.params.userId);
    }
  },
  created() {
    console.log('User created');
  },
  destroyed() {
    console.log('User destroyed');
  }
}
</script>

<style scoped>

</style>
