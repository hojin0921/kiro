<script setup lang="ts">
import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { defineProps } from 'vue'
import type { listColumn } from '@/data/column'
import LevelCell from '@/views/cell/LevelCell.vue'
import WhetherCell from '@/views/cell/WhetherCell.vue'
import StateCell from '@/views/cell/StateCell.vue'

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const emits = defineEmits(['cellClicked', 'selectionChange'])
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array as () => listColumn[],
    default: () => []
  },
  checkbox: {
    type: Boolean,
    default: false
  }
})
const handleCellClick = (row: any) => {
  emits('cellClicked', row)
}
const handleSelectionChange = (row: any) => {
  emits('selectionChange', row)
}
</script>
<template>
  <el-table
    :data="props.data"
    width="100%"
    height="100"
    flexible
    border
    ref="multipleTableRef"
    empty-text="조회 결과가 없습니다"
    @cell-click="handleCellClick"
    @selection-change="handleSelectionChange"
    >\
    <el-table-column v-if="props.checkbox" type="selection" align="center" width="90" />
    <el-table-column
      v-for="column in props.columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
      :width="column.width || 'auto'"
      :sortable="column.sortable"
      :align="column.align || 'center'"
      :header-align="column.headerAlign || 'center'"
    >
      <template v-if="column.label == '레벨'" #default="{ row }">
        <LevelCell :data="row.level" />
      </template>
      <template v-if="column.prop == 'whether'" #default="{ row }">
        <WhetherCell :data="row.whether" :id="row.id" />
      </template>
      <template v-if="column.prop == 'robot_state'" #default="{ row }">
        <StateCell :data="row.robot_state" :id="row.id" />
      </template>
    </el-table-column>
  </el-table>
</template>
