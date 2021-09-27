<template>
  <div class="toast" v-show="isShow">
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // }
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '默认消息', duration = 2000) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration);
    }
  },
}
</script>

<style scoped>
.toast {
  z-index: 2;

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
