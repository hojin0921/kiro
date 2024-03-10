<script setup lang="ts">
import { ref } from 'vue'
import { topMenu } from '@/data/dashboard'
const topMenuRef = ref(topMenu)
const handleMenuClick = (index: number) => {
  topMenuRef.value.forEach((menu, i) => {
    menu.active = i === index
  })
}
</script>

<template>
  <div class="head_article">
    <ul class="scrollbar">
      <li
        v-for="(menu, index) in topMenuRef"
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
