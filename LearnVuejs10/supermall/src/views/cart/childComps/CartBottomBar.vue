<template>
  <div class="bottom-bar">
    <div class="check-button-parent">
      <check-button class="check-button"
                    @click.native="checkAllClick"
                    :is-checked="isSelectAll"/>
    </div>

    <div class="check-text-parent">
      <span class="check-text" v-show="!isSelectAll">全选</span>
    </div>

    <div class="price">
      <span class="selected" v-show="checkLength > 0">已选{{ checkLength }}件, &nbsp;</span>
      <span class="price-text">合计:</span>
      <span class="price-symbol">￥</span>
      <span class="price-price"> {{ totalPrice }}</span>
    </div>

    <div class="calculate-parent">
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
  methods: {
    checkAllClick() {
      console.log(2)
      const isSelectAll = this.isSelectAll;
      this.cartList.map(item => item.checked = !isSelectAll);
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
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      } else {
        // return !this.cartList.filter(item => !item.checked).length > 0;
        return !this.cartList.find(item => !item.checked);
      }
    }
  }
}
</script>

<style scoped>

.bottom-bar {
  display: flex;
  width: 100%;
  height: 50px;

  padding: 0 5px;

  background-color: #fff;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
}

.check-text-parent, .calculate-parent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 全选按钮 */
.bottom-bar .check-button-parent {

  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
}

.check-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.check-text-parent {
  padding: 0 5px;
  height: 100%;
}

.check-text-parent .check-text {
  width: 30px;
  font-size: 8px
}

/* 价格 */
.bottom-bar .price {
  position: relative;
  right: 6px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  width: 100%;
}

/* 结算 */
.bottom-bar .calculate-parent {
  width: 100px;
}

/* 结算按钮 */
.calculate-parent .calculate {
  width: 90px;
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

/* 结算 */
.calculate {
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-tint);
  border-radius: 200px;
  color: #fff;
  font-size: 14px;
}
</style>
