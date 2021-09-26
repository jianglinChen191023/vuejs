<template>
  <div>
    <div class="button" :class="{'check': isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="" v-show="isChecked">
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
}
</script>

<style scoped>
.button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;

  display: flex;
  justify-content: center;
  align-items: center;
}

.button img {
  width: 12px;
}

.check {
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}
</style>
