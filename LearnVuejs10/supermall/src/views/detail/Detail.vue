<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>

      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

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
    DetailGoodsInfo,
    Scroll
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
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

    // 2.4 保存商品的详情数据
    this.detailInfo = data.detailInfo;
  },
  methods: {
    imageLoad() {
      this.refs.scroll.refresh();
    }
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
