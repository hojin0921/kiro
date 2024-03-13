<script setup lang="ts">
import HeadTablet from '@/layouts/HeadTablet.vue'
</script>
<template>
  <div class="tablet_layout">
    <HeadTablet class="tablet_head" />
    <router-view />
  </div>
</template>
<style>
body {
  overflow-y: auto;
  background: #f7f7f7;
}
</style>
