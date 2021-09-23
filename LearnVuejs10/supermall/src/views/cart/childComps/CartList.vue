<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.id" :product="item"/>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters({
      cartList: 'cartList'
    })
  },
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.content {
  overflow: hidden;

  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 99px;
}
</style>
