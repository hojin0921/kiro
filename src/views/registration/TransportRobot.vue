<script setup lang="ts">
import { ref } from 'vue'
import TableList from '@/components/TableList.vue'
import CustomIcon from '@/components/CustomIcon.vue'
import { TransportRobotColumn } from '@/data/column'
import { showAlert } from '@/components/alertUtils'
import ModifyModal from './transport_robot/ModifyModal.vue'
import RegistrationModal from './transport_robot/RegistrationModal.vue'
const RegistrationDialog = ref(false)
const modifyDialog = ref(false)
const extendedData = [...Array(20)].map((_, index) => ({
  id: index + 1,
  robot: '운송로봇1',
  robot_state:
    index % 5 === 0 ? '대기' : index % 3 === 0 ? '운행' : index % 2 === 0 ? '충전' : '꺼짐',
  data: `2023-04-28`,
  position: '하역장1',
  battery: '90',
  order: 'P1 → P2',
  name: '테스터 1'
}))
const handleCellClick = (row: any) => {
  modifyDialog.value = true
}
const selectionItem = ref([])
const handleSelectionChange = (row: any) => {
  selectionItem.value = row.map(({ id, item }: { id: number; item: string }) => ({ id, item }))
}
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
                  title: '운송 로봇 삭제',
                  text: '<span>운송로봇1</span>을 삭제하시겠습니까?',
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
            row-class-name="cilck_row"
            :data="extendedData"
            :columns="TransportRobotColumn"
            :checkbox="true"
            @cellClicked="handleCellClick"
            @selectionChange="handleSelectionChange"
          />
        </div>
        <el-pagination layout="prev, pager, next" :total="1000" />
        <el-dialog v-model="RegistrationDialog" title="운송 로봇 등록" width="500px" align-center>
          <RegistrationModal @cancel="RegistrationDialog = false" />
        </el-dialog>
        <el-dialog v-model="modifyDialog" title="운송 로봇 변경" width="500px" align-center>
          <ModifyModal @cancel="modifyDialog = false" />
        </el-dialog>
      </div>
    </section>
  </div>
</template>
