<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: String,
    default: '  '
  }
})
</script>
<template>
  <div :class="[props.data == '심각' ? 'serious' : props.data == '경고' ? 'warning' : '']">
    {{ props.data }}
  </div>
</template>
<style scoped>
.serious {
  color: #b20021;
}
.warning {
  color: #3b76bd;
}
</style>
