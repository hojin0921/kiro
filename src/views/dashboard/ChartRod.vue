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
import * as chartConfig from './chartRodConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const { data, options } = chartConfig
</script>
<template>
  <div class="chat_bar">
    <div class="bar"><Bar :data="data" :options="options" /></div>
    <ul class="bar_table">
      <li v-for="(menu, index) in data.datasets" :key="index">
        <span>
          <i :style="{ backgroundColor: data.datasets[index].backgroundColor }"></i>
          {{ menu.labels }}
        </span>
        <span v-for="(r, t) in menu.data" :key="t">
          {{ r.toLocaleString() }}
        </span>
      </li>
    </ul>
  </div>
</template>
