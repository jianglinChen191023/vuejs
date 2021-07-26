<template>
  <div id="home">
    <!--  导航  -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--  轮播图  -->
    <home-swiper :banners="banners"></home-swiper>
    <!--  首页推荐  -->
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>

    <tab-control class="tab-control" :titles="titles"></tab-control>

    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import {getHomeMultidata, getHomeGoods} from "network/home";


export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
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
      goods: {
        'pop': {
          page: 0,
          list: [
            {
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            },{
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            },{
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            },{
              price: '1010',
              cfav: 73,
              title: '高级感十足哑光口红',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171020_3elc4087he5d801gd8348b35fce4l_450x600.jpg_360x540.v1cAC.40.webp'}
            }, {
              price: '14.15',
              cfav: 73,
              title: '随身携带口红笔',
              show: {img: 'https://s11.mogucdn.com/mlcdn/1689c6/171013_18elffi2hiifikkccli8agb9e3a0j_450x600.jpg_360x540.v1cAC.40.webp'}
            }
          ]
        },
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 请求商品数据
    // this.getHomeGoods('pop');
    // this.getHomeGoods('new');
    // this.getHomeGoods('sell');
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.banners = res.data.banner.list;
        // this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page++;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #ffff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
