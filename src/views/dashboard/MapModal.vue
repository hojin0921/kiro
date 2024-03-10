<template>
  <div class="body"></div>
  <div class="dialog-footer fxcen">
    <el-button class="ib" type="success" @click="() => emits('cancel')"> 확인 </el-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emits = defineEmits(['cancel'])
</script>
