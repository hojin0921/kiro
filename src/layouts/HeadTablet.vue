<script setup lang="ts">
import CustomIcon from '@/components/CustomIcon.vue'
</script>

<template>
  <header>
    <h1><CustomIcon name="tablet_logo" alt="포항시산림조합" /></h1>
    <el-button size="small" class="ib" @click="router.push('/login')">로그아웃</el-button>
  </header>
</template>
