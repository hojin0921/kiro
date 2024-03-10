<script lang="ts" setup>
import PeriodData from '@/components/PeriodData.vue'
import { ref } from 'vue'
const value = ref(null)
const options = [
  {
    value: '1',
    label: '밤'
  },
  {
    value: '2',
    label: '대추'
  }
]
</script>
<template>
  <div class="chart_search search">
    <el-select v-model="value" placeholder="입고" style="width: 120px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <hr />
    <PeriodData :monthShow="true" />
    <el-button class="ib" type="success">적용</el-button>
  </div>
</template>

<style scoped>
@import '@/assets/css/statistics.scss';
</style>
