<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";
import {debounce} from "common/utils";
import {itemListenerMixin} from "common/mixin";


export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: {}
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

    // 2.2 创建商品信息的对象
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

    // 2.3 创建店铺信息的对象
    this.shop = new Shop(data.shopInfo);

    // 2.4 取出商品的详情数据
    this.detailInfo = data.detailInfo;

    // 2.5 创建商品参数信息的对象
    this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

    // 2.6 取出评论的信息
    if (data.rate.cRate !== 0) {
      this.commentInfo = data.rate.list[0];
    }

    // 3 请求推荐数据
    this.recommends = getRecommend().data.list;
  },
  methods: {
    imageLoad() {
      this.refresh();
    }
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener);
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
