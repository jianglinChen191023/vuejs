<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>

    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index"
           :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了
      if (++this.counter === this.imagesLength) {
        this.$emit("imgLoad");
      }
    }
  },
  watch: {
    detailInfo() {
      // 获取图片个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 2px 4px;
}

.info-desc .start, .end {
  width: 80px;
  height: 1px;
  background-color: #333;
}

.info-desc .start {
  float: left;
  position: relative;
}

.info-desc .end {
  float: right;
  position: relative;
}

.info-desc .start::before, .end::before {
  content: '';
  width: 5px;
  height: 5px;
  background-color: #333;
}

.info-desc .start::before {
  position: absolute;
  top: -4px;
}

.info-desc .end::before {
  position: absolute;
  top: -4px;
  right: 0;
}

.info-desc .desc {
  padding: 10px 4px;
  font-size: 14px;
}

.info-key {
  padding: 10px 4px;
  margin-bottom: 10px;
  font-weight: bold;
}

img {
  width: 100%;
}

</style>
