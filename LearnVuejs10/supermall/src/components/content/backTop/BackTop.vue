<template>
  <div class="back-top" @click="backClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backClick() {
      this.$emit("backClick");
    }
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 56px;
}

.back-top img {
  height: 43px;
  width: 43px;
}
</style>
