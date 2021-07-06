<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!-- 展示子组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '你好啊',
      path: '/home/news'
    }
  },
  created() {
    console.log("home created");
    document.title = '首页';
  },
  destroyed() {
    console.log('home destroyed');
  },
  // 这两个函数, 只有该组件被保持了状态使用了 keep-alive 时, 才是有效的
  activated() {
    /* 活跃状态 */
    console.log('activated');
    this.$router.push(this.path);
  },
  // deactivated() {
  //   /* 不活跃状态 */
  //   console.log(this.$route.path);
  //   console.log('deactivated');
  //   this.path = this.$route.path;
  // }
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 'this'
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>
