<template>
<div>
  <h2>{{$store.state.counter}}</h2>
  <h2>{{$store.getters.powerCounter}}</h2>

  本地 more20stu
  <h2>{{more20stu}}</h2>
  仓库 more20stu:
  <h2>{{ $store.getters.more20stu }}</h2>

  <h2>---------- APP内容: info对象的内容是否是响应式的 ----------</h2>
  <h2>{{ $store.state.info }}</h2>
</div>
</template>

<script>
export default {
  name: "HelloVuex",
  computed: {
    more20stu(){
      return this.$store.state.students.filter(s => s.age >= 20);
    }
  }
}
</script>

<style scoped>

</style>
