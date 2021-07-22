<template>
  <div>
    <h2>{{categories}}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "HelloWorld",
  data() {
    return {
      categories: ''
    }
  },
  created() {
    axios({
      url: 'http://httpbin.org/get'
    }).then(res => {
      this.categories = res;
    })
  }
}
</script>

<style scoped>

</style>
