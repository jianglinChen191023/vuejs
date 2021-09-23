<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-all" @click.native="checkAllClick"/>
      <span class="check-all-text">全选</span>
    </div>

    <div class="price">
      <span class="selected">已选{{ checkLength }}件, &nbsp;</span>
      <span class="price-text">合计:</span>
      <span class="price-symbol">￥</span>
      <span class="price-price"> {{ totalPrice }}</span>
    </div>

    <div class="div-calculate">
      <div class="calculate">
        结算
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  data() {
    return {
      isCheckAllClick: false
    }
  },
  methods: {
    checkAllClick() {
      this.isCheckAllClick = !this.isCheckAllClick;
      this.$emit("checkAllClick", this.isCheckAllClick);
    }
  },
  computed: {
    ...mapGetters({
      cartList: 'cartList'
    }),
    totalPrice() {
      const price = this.cartList
        .filter(item => item.checked)
        .reduce((pre, item) => pre + (item.price * item.count), 0)
        .toFixed(2);
      const priceStr = price.toString();
      if (priceStr.substring(priceStr.length - 3) === ".00") {
        return priceStr.substring(0, priceStr.length - 3);
      } else {
        return price
      }
    },
    checkLength() {
      return this.cartList
        .filter(item => item.checked)
        .length;
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: absolute;
  bottom: 49px;
  display: flex;
}

.bottom-bar > div {
  position: absolute;

  display: flex;
  align-items: center;
}

.check-content {
  left: 0;
  height: 100%;
  width: 70px;
}

/* 全选按钮 */
.check-content .check-all {
  margin-left: 6px;
  margin-right: 6px;
}

/* 全选 */
.check-content .check-all-text {
  font-size: 8px
}

/* 价格 */
.price {
  right: 106px;

  justify-content: flex-end;

  align-items: self-end;
  height: 100%;
  width: 190px;
}

.price > span {
  display: inline-block;
}

.price .selected {
  color: #999999;
  font-size: 8px;
}

.price .price-text {
  font-size: 10px;
}

.price .price-symbol {
  font-size: 10px;
  font-weight: bold;
  color: var(--color-tint);
}

.price .price-price {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-tint);
}

.div-calculate {
  right: 10px;
  height: 100%;
}

/* 结算 */
.div-calculate .calculate {
  height: 36px;
  width: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-tint);
  border-radius: 200px;
  color: #fff;
  font-size: 14px;
}
</style>
