<script lang="ts" setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
const startDay = ref('')
const endDay = ref('')
const month = ref('')
const props = defineProps({
  monthShow: {
    default: false
  }
})
</script>
<template>
  <div class="period">
    <el-date-picker v-model="startDay" type="date" placeholder="YYYY.MM.DD" size="default" />
    -
    <el-date-picker v-model="endDay" type="date" placeholder="YYYY.MM.DD" size="default" />
    <el-radio-group v-model="month" style="margin-left: 16px" v-if="props.monthShow">
      <el-radio-button label="1개월" value="1" />
      <el-radio-button label="6개월" value="6" />
      <el-radio-button label="10개월" value="10" />
    </el-radio-group>
  </div>
</template>
