<template>
  <div id="home">
    <!--  导航  -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control class="tab-control"
                 :titles="titles"
                 @tabClick="tabClick"
                 ref="tabControl1" v-show="isTabFixed">
    </tab-control>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <!--  轮播图  -->
      <home-swiper :banners="banners" @swiperImageLoad="tabControlImageLoad"></home-swiper>
      <!--  首页推荐  -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!--  本周流行  -->
      <feature-view @tabControlImageLoad="tabControlImageLoad"></feature-view>

      <tab-control class="tab-control"
                   :titles="titles"
                   @tabClick="tabClick"
                   ref="tabControl2" v-show="!isTabFixed">
      </tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import {getHomeMultidata, getHomeGoods} from "network/home";
import {debounce} from "common/utils";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      titles: ['流行', '新款', '精选'],
      result: null,
      recommends: [
        {
          link: '',
          image: 'https://img2.baidu.com/it/u=201759185,63866355&fm=26&fmt=auto&gp=0.jpg',
          title: '吴大小姐'
        },
        {
          link: '',
          image: 'https://img2.baidu.com/it/u=201759185,63866355&fm=26&fmt=auto&gp=0.jpg',
          title: '吴大小姐'
        },
        {
          link: '',
          image: 'https://img2.baidu.com/it/u=201759185,63866355&fm=26&fmt=auto&gp=0.jpg',
          title: '吴大小姐'
        },
        {
          link: '',
          image: 'https://img2.baidu.com/it/u=201759185,63866355&fm=26&fmt=auto&gp=0.jpg',
          title: '吴大小姐'
        }
      ],
      banners: [
        {
          link: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%CA%D6%BB%FA%B5%E7%C9%CC%CA%D7%D2%B3%C2%D6%B2%A5%CD%BC%20%CD%BC%C6%AC&fr=ala&ala=1&alatpl=normal&pos=0',
          image: 'https://img2.baidu.com/it/u=201759185,63866355&fm=26&fmt=auto&gp=0.jpg',
        },
        {
          link: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%CA%D6%BB%FA%B5%E7%C9%CC%CA%D7%D2%B3%C2%D6%B2%A5%CD%BC%20%CD%BC%C6%AC&fr=ala&ala=1&alatpl=normal&pos=0',
          image: 'https://img1.baidu.com/it/u=191293131,560413609&fm=26&fmt=auto&gp=0.jpg',
        }
      ],
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      goods: {
        'pop': {
          page: 0,
          list: [
            {
              id: 1,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 2,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 3,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 4,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 5,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 6,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 7,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 8,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 9,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 10,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 11,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 12,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }
          ]
        },
        'new': {
          page: 0,
          list: [
            {
              id: 9,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红1',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 10,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔1',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 11,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红1',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 12,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔1',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }
          ]
        },
        'sell': {
          page: 0,
          list: [
            {
              id: 13,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红2',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 14,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔2',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 15,
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红2',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              id: 16,
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔2',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }
          ]
        }
      }
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    // this.getHomeGoods('pop');
    // this.getHomeGoods('new');
    // this.getHomeGoods('sell');

    this.debounceTabControl = debounce(() => {
      // 获取 tabControl 的 offsetTop
      // 所有的组件都有一个属性 $el: 用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    }, 100);
  },
  mounted() {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on('itemImageLoad', () => {
      refresh();
    });
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabControlImageLoad() {
      this.debounceTabControl();
    },
    contentScroll(position) {
      // 监听 BackTop 是否显示
      this.isShowBackTop = -(position.y) > 1000;

      // 监听 TabControl 是否吸顶 (position: fixed), 变量 isTabFixed
      this.isTabFixed = (-position.y) > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);

      this.$refs.scroll.refresh();
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      // getHomeMultidata().then(res => {
      // this.banners = res.data.banner.list;
      // this.recommends = res.data.recommend.list;
      // })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page++;
      // getHomeGoods(type, page).then(res => {
      //   this.goods[type].list.push(...res.data.list);
      // })

      const list = [{
        id: (200 + page),
        price: '1010',
        cfav: 73,
        title: 'More' + page + ' 高级感十足哑光口红',
        show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
      }, {
        id: (100 + page),
        price: '14.15',
        cfav: 73,
        title: 'More' + page + ' 随身携带口红笔',
        show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
      }]

      this.goods[type].list.push(...list);

      // 完成上拉加载更多
      this.$refs.scroll.finishPullUp();
    }
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  /* vh > viewport height: 视口高度 */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #ffff;

  /* 在使用浏览器原生滚动时, 为了让导航不跟随一起滚动 */
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}

.tab-control {
  /*position: sticky;*/
  /*top: 44px;*/
  /*z-index: 9;*/

  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
}

/*.content {*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 44px;*/
/*}*/
</style>
