import {debounce} from "common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // 图片加载完成的事件监听
    // 对 this.$refs.scroll.refresh 进行防抖操作
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    // 对我们监听的事件进行保存
    this.itemImgListener = () => {
      this.refresh();
    }

    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
}

// backTop 的混入封装
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenerShowBackTop(position){
      // 是否显示回到顶部
      this.isShowBackTop = -(position.y) > 1000;
    }
  }
}
