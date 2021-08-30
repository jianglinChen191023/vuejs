<template>
  <div class="param-info">
    <table v-for="(table, index) in paramInfo.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-show="!!paramInfo.image">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td {
  padding: 10px 0;
}

.info-size tr:not(:last-child), .info-param tr {
  border-bottom: 1px solid #f2f5f8;
}

.info-size tr:last-child {
  border-bottom: 3px solid #f2f5f8;
}

.info-param .info-param-key {
  width: 30%;
}

.info-param .param-value {
  color: var(--color-tint);
}

</style>
