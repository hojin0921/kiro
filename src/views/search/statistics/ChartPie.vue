<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartPieConfig.js'

ChartJS.register(ArcElement, Tooltip)

const { data, options } = chartConfig
</script>
<template>
  <div class="piechat">
    <div class="chat"><Pie :data="data" :options="options" /></div>
    <div class="legends">
      <ul class="legend">
        <li v-for="(menu, index) in data.labels" :key="index">
          <i :style="{ backgroundColor: data.datasets[0].backgroundColor[index] }"></i>
          {{ menu }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/statistics.scss';
</style>
