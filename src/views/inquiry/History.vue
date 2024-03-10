<script lang="ts" setup>
import PeriodData from '@/components/PeriodData.vue'
import { ref } from 'vue'
const value = ref(null)
const options = [
  {
    value: '1',
    label: '밤'
  },
  {
    value: '2',
    label: '대추'
  }
]
</script>
<template>
  <div class="head_article search">
    <el-select v-model="value" placeholder="생산지 기준" style="width: 180px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="value" placeholder="농가 명" style="width: 180px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <PeriodData />
    <el-select v-model="value" placeholder="전체 품목" style="width: 180px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button class="ib" type="success">조회</el-button>
  </div>
</template>

<style scoped>
@import '@/assets/css/search.scss';
</style>
