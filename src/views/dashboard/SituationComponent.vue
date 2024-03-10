<script setup lang="ts">
import { situation } from '@/data/dashboard'
import CustomIcon from '@/components/CustomIcon.vue'
</script>
<template>
  <div class="situation">
    <ul>
      <li v-for="(menu, index) in situation" :key="index">
        <span class="name">
          <CustomIcon :name="menu.icon" />
          {{ menu.name }}
        </span>
        <strong>20box</strong>
        <span class="value">2000kg</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import '@/assets/css/dashboard.scss';
</style>
