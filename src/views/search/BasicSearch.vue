<script setup lang="ts">
import { ref } from 'vue'
import TableList from '@/components/TableList.vue'
import { showAlert } from '@/components/alertUtils'
import HeadInquiry from '../inquiry/Basic.vue'
import InfoModal from './basic/InfoModal.vue'
import ModifyModal from './basic/ModifyModal.vue'
import CollectModal from './basic/CollectModal.vue'
import { BasicSearchColumn } from '@/data/column'
const infoDialog = ref(false)
const modifyDialog = ref(false)
const collectDialog = ref(false)
const titleDialog = ref()
const handleCellClick = (row: any) => {
  titleDialog.value = row.state
  infoDialog.value = true
}
const modifyClick = () => {
  infoDialog.value = false
  modifyDialog.value = true
}
const collectClick = () => {
  infoDialog.value = false
  collectDialog.value = true
}
const extendedData = [...Array(20)].map((_, index) => ({
  id: index + 1,
  item: '사과',
  state: index % 3 === 0 ? '입고' : index % 2 === 0 ? '출고' : '선별',
  farmhouse: `농가 ${String.fromCharCode(65 + (index % 3))}`,
  data: '2021-07-01 10:00',
  standard: '그물망 - 3kg',
  kg: 3000,
  name: '홍길동'
}))
</script>

<template>
  <div class="cont scrollbar">
    <HeadInquiry />
    <section class="cont_section full scrollbar">
      <div class="box">
        <div class="list_top">
          <div class="text">
            <strong>* 2023.04.01 - 2023.05.15 / 밤 / 전체</strong>
            조회 결과 입니다.
          </div>
          <el-button
            class="ib"
            @click="
              showAlert({
                title: '출력',
                text: '조회 결과를 출력하시겠습니까?',
                thenCallback: () => {
                  console.log('출력')
                }
              })
            "
          >
            Excel 다운로드
          </el-button>
        </div>
        <div style="height: calc(100% - 103px)">
          <TableList
            :data="extendedData"
            :columns="BasicSearchColumn"
            row-class-name="cilck_row"
            @cellClicked="handleCellClick"
          />
        </div>
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </section>
    <el-dialog v-model="infoDialog" title="상세정보" width="544px" align-center>
      <InfoModal
        :title="titleDialog"
        @modify="modifyClick"
        @collect="collectClick"
        @cancel="infoDialog = false"
      />
    </el-dialog>
    <el-dialog v-model="modifyDialog" title="수정" width="1100px" align-center>
      <ModifyModal :title="titleDialog" @cancel="modifyDialog = false" />
    </el-dialog>
    <el-dialog v-model="collectDialog" title="회수" width="1100px" align-center>
      <CollectModal :title="titleDialog" @cancel="collectDialog = false" />
    </el-dialog>
  </div>
</template>
