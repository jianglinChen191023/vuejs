<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#d81e06">
        <img slot="item-icon" src="./assets/img/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#d81e06">
        <img slot="item-icon" src="./assets/img/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#d81e06">
        <img slot="item-icon" src="./assets/img/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#d81e06">
        <img slot="item-icon" src="./assets/img/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/profile_active.svg" alt="">
        <div slot="item-text">个人中心</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>

