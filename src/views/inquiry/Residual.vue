<script lang="ts" setup>
import PeriodData from '@/components/PeriodData.vue'
</script>
<template>
  <div class="head_article search">
    <PeriodData />
    <el-select placeholder="품목 (전체)" style="width: 180px" />
    <el-select placeholder="농가 명(전체)" style="width: 180px" />
    <el-button class="ib" type="success">조회</el-button>
  </div>
</template>
