<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import Scroll from "components/common/scroll/Scroll";

import {getDetail, Goods} from "network/detail";
import {Shop} from "../../network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    // 1. 保持传入的ID
    this.id = this.$route.params.id;

    // 2. 根据 ID 请求详情数据
    // getDetail(this.id).then(res => {
    //   console.log(res);
    // })
    const res = getDetail(this.id);
    const data = res.result;

    // 2.1 获取顶部的图片轮播数据
    this.topImages = data.itemInfo.topImages;

    // 2.2 获取商品信息
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

    // 2.3 创建店铺信息的对象
    this.shop = new Shop(data.shopInfo);
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>
