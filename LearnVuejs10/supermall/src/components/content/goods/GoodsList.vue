<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="goodsId(item)"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    goodsId(item) {
      return item.id || item.shop_id;
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
