<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: String,
    default: '  '
  },
  id: {
    type: Number
  }
})
</script>
<template>
  <el-button class="ib check" v-if="props.data === '확인'" type="primary">
    {{ props.data }}
  </el-button>
  <el-button class="ib nocheck" v-else-if="props.data === '미확인'" type="primary">
    {{ props.data }}
  </el-button>
  <div v-else type="primary">{{ props.data }}</div>
</template>
