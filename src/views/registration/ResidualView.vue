<script setup lang="ts">
import { ref } from 'vue'
import HeadInquiry from '../inquiry/Residual.vue'
import CheckboxGroup from '@/components/CheckboxGroup.vue'
import TableList from '@/components/TableList.vue'
import { ResidualColumn } from '@/data/column'
import { ResidualCheckboxGroup } from '@/data/checkbox_group'
import ModifyModal from './residual/ModifyModal.vue'
const modifyDialog = ref(false)
const extendedData = [...Array(20)].map((_, index) => ({
  id: index + 1,
  item: '밤',
  data: '2023-05-01 06:20',
  farm: `산림 농가`,
  stocked: '10 kg',
  stock: '10 kg',
  windfall: '10 kg',
  name: '테스터 1'
}))
const handleCellClick = (row: any) => {
  modifyDialog.value = true
}
const selectedItems = ref()
const handleSelectedItemsChange = (items: string[]) => {
  selectedItems.value = items
}
</script>

<template>
  <div class="cont scrollbar">
    <HeadInquiry />
    <section class="cont_section full scrollbar">
      <div class="box">
        <div class="list_top end">
          <CheckboxGroup
            :items="ResidualCheckboxGroup"
            @update:selectedItems="handleSelectedItemsChange"
          />
        </div>
        <div style="height: calc(100% - 103px)">
          <TableList
            row-class-name="cilck_row"
            :data="extendedData"
            :columns="ResidualColumn"
            :checkbox="true"
            @cellClicked="handleCellClick"
          />
        </div>
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </section>
    <el-dialog v-model="modifyDialog" title="잔여 수량 변경" width="438px" align-center>
      <ModifyModal @cancel="modifyDialog = false" />
    </el-dialog>
  </div>
</template>
