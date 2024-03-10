<script setup lang="ts">
import { useRouter } from 'vue-router'
import CustomIcon from '@/components/CustomIcon.vue'
const router = useRouter()
</script>
<template>
  <header>
    <h2>{{ router.currentRoute.value.name }}</h2>
    <div class="info">
      <div class="name">
        <i><CustomIcon name="user_icon" alt="알림" /></i>
        관리자
      </div>
      <el-button size="small" class="ib" @click="router.push('/login')">로그아웃</el-button>
    </div>
  </header>
</template>
