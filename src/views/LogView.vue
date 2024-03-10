<script setup lang="ts">
import { ref } from 'vue'
import TableList from '@/components/TableList.vue'
import CheckboxGroup from '@/components/CheckboxGroup.vue'
import { LogColumn } from '@/data/column'
import { LogCheckboxGroup } from '@/data/checkbox_group'
const Data = [...Array(20)].map((_, index) => ({
  timestamp: 'May 23, 2023 @ 14:00:00.000',
  event: `Debug`,
  level: 'Info',
  message: '선별, B농가, 대추, 입고 100kg, 선별 전 80kg, 선별 후 78kg'
}))
const selectedItems = ref()
const handleSelectedItemsChange = (items: string[]) => {
  selectedItems.value = items
}
</script>

<template>
  <div class="cont">
    <section class="cont_section full" style="height: calc(100% - 65px)">
      <div class="box">
        <div class="list_top end">
          <CheckboxGroup
            :items="LogCheckboxGroup"
            @update:selectedItems="handleSelectedItemsChange"
          />
        </div>
        <div style="height: calc(100% - 103px)">
          <TableList :data="Data" :columns="LogColumn" />
        </div>
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </section>
  </div>
</template>
