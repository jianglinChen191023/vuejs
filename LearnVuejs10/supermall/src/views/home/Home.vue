<template>
  <div id="home">
    <!--  导航  -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners"></home-swiper>

    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import {getHomeMultidata} from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      result: null,
      recommends: [
        {
          link: '',
          image: '',
          title: '吴大小姐'
        },
        {
          link: '',
          image: '',
          title: '吴大小姐'
        },
        {
          link: '',
          image: '',
          title: '吴大小姐'
        },
        {
          link: '',
          image: '',
          title: '吴大小姐'
        }
      ],
      banners: [
        {
          link: 'http://www.baidu.com',
          image: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1611/08/c47/29641814_1478609875824.jpg',
        }
      ]
    }
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata()
      .then(res => {
        this.result = res;
      })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #ffff;
}
</style>
