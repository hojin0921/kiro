<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartRodHorizontalConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const { horizontalData, horizontalOptions } = chartConfig
</script>
<template>
  <div class="chat_bar horizonta">
    <div class="bar">
      <div class="ti">단위: kg</div>
      <Bar :data="horizontalData" :options="horizontalOptions" />
    </div>
    <div class="bar-table">
      <ul class="bar_table head">
        <li>
          <span style="width: 16%"></span>
          <span v-for="(r, t) in horizontalData.labels" :key="t" style="width: 21%">
            {{ r }}
          </span>
        </li>
      </ul>
      <ul class="bar_table">
        <li v-for="(menu, index) in horizontalData.datasets" :key="index">
          <span style="width: 16%">
            <i :style="{ backgroundColor: horizontalData.datasets[index].backgroundColor }"></i>
            {{ menu.labels }}
          </span>
          <span v-for="(r, t) in menu.data" :key="t" style="width: 21%">
            {{ r.toLocaleString() }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/statistics.scss';
</style>
