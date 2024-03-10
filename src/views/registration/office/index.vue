<script setup lang="ts">
import { ref } from 'vue'
import TableList from '@/components/TableList.vue'
import SearchForm from '@/components/SearchForm.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import { OfficeColumn } from '@/data/column'
import { showAlert } from '@/components/alertUtils'
import ModifyModal from './ModifyModal.vue'
import RegistrationModal from './RegistrationModal.vue'
const RegistrationDialog = ref(false)
const modifyDialog = ref(false)
const selectionItem = ref([])
const handleCellClick = (row: any) => {
  modifyDialog.value = true
}
const handleSelectionChange = (row: any) => {
  selectionItem.value = row.map(({ id, item }: { id: number; item: string }) => ({ id, item }))
}
const extendedData = [...Array(20)].map((_, index) => ({
  id: index + 1,
  office: '포항산림청',
  data: '2021-07-01 10:00'
}))
</script>

<template>
  <div class="box">
    <div class="head_search">
      <SearchForm />
      <div class="topBtn">
        <el-button class="ib" type="success" @click="RegistrationDialog = true">
          <el-icon class="el-icon--left add_icon"><CustomIcon name="add_icon" /></el-icon>등록
        </el-button>
        <el-button
          class="ib"
          :disabled="!selectionItem.length"
          @click="
            showAlert({
              title: '소속 삭제',
              text: '<span>포항산림청</span>을 삭제하시겠습니까?',
              thenCallback: () => {
                console.log('출력')
              }
            })
          "
        >
          삭제
        </el-button>
      </div>
    </div>
    <div style="height: calc(100% - 103px)">
      <TableList
        :data="extendedData"
        :columns="OfficeColumn"
        row-class-name="cilck_row"
        :checkbox="true"
        @cellClicked="handleCellClick"
        @selectionChange="handleSelectionChange"
      />
    </div>
    <el-pagination layout="prev, pager, next" :total="1000" />
    <el-dialog v-model="RegistrationDialog" title="소속 등록" width="480px" align-center>
      <RegistrationModal @cancel="RegistrationDialog = false" />
    </el-dialog>
    <el-dialog v-model="modifyDialog" title="소속 변경" width="480px" align-center>
      <ModifyModal @cancel="modifyDialog = false" />
    </el-dialog>
  </div>
</template>
