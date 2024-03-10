<script setup lang="ts">
import BoxTitle from '@/components/BoxTitle.vue'
import ChartPie from './ChartPie.vue'
</script>

<template>
  <div class="all_sum">
    <div class="select_g">
      <el-select placeholder="2023" style="width: 120px"> </el-select>
      <el-select placeholder="05" style="width: 120px"> </el-select>
      <el-select placeholder="밤" style="width: 140px"> </el-select>
    </div>
    <ul class="all_sum_data">
      <li>
        <span>총합</span>
        <strong>1,000,000</strong>
      </li>
      <li>
        <span>정상 <s>79.05%</s></span>
        <strong>1,000</strong>
      </li>
      <li>
        <span>불량 <s>20.95%</s></span>
        <strong>404</strong>
      </li>
    </ul>
    <BoxTitle title="불량 분석 결과" tag="밤" style="margin-top: 32px" />
    <ChartPie />
  </div>
</template>

<style scoped>
@import '@/assets/css/statistics.scss';
</style>
