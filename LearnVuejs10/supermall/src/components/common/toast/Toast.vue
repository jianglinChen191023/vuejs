<template>
  <div class="toast" v-show="show">
    <div class="toast-flex">
      <span>{{ message }}</span>
    </div>

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

  background-color: rgba(0, 0, 0, .7);
  color: #fff;

  width: 200px;
}

.toast-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  font-size: 14px;
}

</style>
