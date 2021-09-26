<template>
  <div class="toast" v-show="show">
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.toast {
  padding: 8px 10px;
  position: fixed;
  top: 50%;
  left: 50%;

  border-radius: 6px;

  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, .6);
  color: #fff;
}

.message {
  white-space: nowrap;
  font-size: 14px;
}

</style>
