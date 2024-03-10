<script setup lang="ts">
import GnbLayout from '@/layouts/GnbLayout.vue'
import HeadLayout from '@/layouts/HeadLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div class="default_layout">
    <GnbLayout />
    <div class="content">
      <HeadLayout />
      <main :class="{ scrollbar: !router.currentRoute.value.meta.headArticle }">
        <router-view />
      </main>
    </div>
  </div>
</template>
