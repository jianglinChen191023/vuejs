<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>

  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import {getDetail} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      id: null,
      topImages: []
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
    this.topImages = res.result.itemInfo.topImages;
  }
}
</script>

<style scoped>

</style>
