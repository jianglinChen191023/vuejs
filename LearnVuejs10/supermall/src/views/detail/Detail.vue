<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    @titleClick="titleClick"
                    ref="nav"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-param-info :param-info="paramInfo" ref="params"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>

    <detail-bottom-bar @addCart="addToCart"/>

    <toast :message="message" :show="show"/>
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
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";
import {itemListenerMixin, backTopMixin} from "common/mixin";
import {debounce} from "common/utils";

import {mapActions} from 'vuex'

import Toast from 'components/common/toast/Toast'

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
    DetailBottomBar,
    Scroll,
    GoodsList,
    Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: {},
      themeTopYs: [],
      getThemeTopY: null,
      message: '',
      show: false
    };
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

    // 4. 给 getThemeTopY 赋值(对给 this.themeTopYs 赋值操作进行防抖)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs)
    }, 50);
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      addCart: 'addCart'
    }),
    addToCart() {
      // 1. 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.id = this.id;

      // 2. 将商品添加到购物车里
      // 2.1 Promise
      // 2.2 mapActions
      // this.$store.commit('addCart', product);

      // this.$store.dispatch('addCart', product)
      //   .then(res => {
      //     console.log(res);
      //   });

      this.addCart(product)
        .then(res => {
          this.show = true;
          this.message = res;

          setTimeout(() => {
            this.show = false;
            this.message = '';
          }, 1500);
        });
    },
    imgLoad() {
      this.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      // 1. 获取 y 值
      const positionY = -position.y;

      // 2. positoinY 和 主题[this.themeTopYs]中的值进行对比
      // [0, 2800, 3687, 3893]

      // 2.0 条件1
      // 如果标题指针 和 循环指针一致则继续下一个

      // 2.1 条件1.1
      // positionY 在 0 和 2800 之间, index = 0
      // positionY 在 =2800 和 3687 之间, index = 1
      // positionY 在 =3687 和 3893 之间, index = 2
      // positionY 在 =3893 和 Number.MAX_VALUE 之间, index = 3

      const length = this.themeTopYs.length;
      const currentIndex = this.$refs.nav.currentIndex;
      for (let i = 0; i < length - 1; i++) {
        if (currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.$refs.nav.currentIndex = i;
          break;
        }
      }

      this.listenerShowBackTop(position);
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
  height: calc(100% - 44px - 49px);
}
</style>
