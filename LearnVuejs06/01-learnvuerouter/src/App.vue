<template>
  <div id="app">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!--    <router-link to="/home">Go to Home</router-link>-->
    <!--    <router-link to="/about" tag="li" replace>Go to About</router-link>-->

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>

    <router-link :to="{path: '/profile', query: {name: 'orange', age: 18, height: 1.88}}">
      档案
    </router-link>

    <!-- params -->
    <button @click="userClick">用户</button>
    <!-- query -->
    <button @click="profileClick">档案</button>

    <!-- 缓存视图 -->
    <keep-alive exclude="Profile,About">
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式来修改路由
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push('/user/' + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'orange',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
