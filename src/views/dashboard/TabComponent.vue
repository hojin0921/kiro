<script setup lang="ts">
import { ref } from 'vue'
import { storage } from '@/data/dashboard'
const storageRef = ref(storage)
const handleMenuClick = (index: number) => {
  storageRef.value.forEach((menu, i) => {
    menu.active = i === index
  })
}
</script>
<template>
  <div class="dashboard_tab">
    <ul class="scrollbar">
      <li
        v-for="(menu, index) in storageRef"
        :key="index"
        :class="{ active: menu.active }"
        @click="handleMenuClick(index)"
      >
        {{ menu.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import '@/assets/css/dashboard.scss';
</style>
