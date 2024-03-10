<script setup lang="ts">
import { ref } from 'vue'
import TableList from '@/components/TableList.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import { DeliveryColumn } from '@/data/column'
import { showAlert } from '@/components/alertUtils'
import ModifyModal from './delivery/ModifyModal.vue'
import RegistrationModal from './delivery/RegistrationModal.vue'
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
  delivery: 'A마트',
  data: `2023-04-28`,
  car: '000-000-0000',
  tel: '000-000-0000',
  name: '테스터 1'
}))
</script>

<template>
  <div class="cont">
    <section class="cont_section full" style="height: calc(100% - 65px)">
      <div class="box">
        <div class="head_search end">
          <div class="topBtn">
            <el-button class="ib" type="success" @click="RegistrationDialog = true">
              <el-icon class="el-icon--left add_icon"><CustomIcon name="add_icon" /></el-icon>등록
            </el-button>
            <el-button
              class="ib"
              :disabled="!selectionItem.length"
              @click="
                showAlert({
                  title: '배송지 삭제',
                  text: '<span>A마트</span>을 삭제하시겠습니까?',
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
            :columns="DeliveryColumn"
            :checkbox="true"
            row-class-name="cilck_row"
            @cellClicked="handleCellClick"
            @selectionChange="handleSelectionChange"
          />
        </div>
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </section>
    <el-dialog v-model="RegistrationDialog" title="배송지 등록" width="480px" align-center>
      <RegistrationModal @cancel="RegistrationDialog = false" />
    </el-dialog>
    <el-dialog v-model="modifyDialog" title="배송지 수정" width="480px" align-center>
      <ModifyModal @cancel="modifyDialog = false" />
    </el-dialog>
  </div>
</template>
