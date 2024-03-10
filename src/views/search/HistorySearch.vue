<script setup lang="ts">
import HeadInquiry from '../inquiry/History.vue'
import TableList from '@/components/TableList.vue'
import { HistorySearchColumn } from '@/data/column'
import { showAlert } from '@/components/alertUtils'
const extendedData = []
// const extendedData = [...Array(20)].map((_, index) => ({
//   id: index + 1,
//   item: '사과',
//   delivery: '2021-07-01 10:00',
//   quantity: 3000,
//   screening: '2021-07-01 10:00',
//   screening_kg: 3000,
//   store: '2021-07-01 10:00',
//   store_kg: 3000,
//   storage: '창고',
//   address: '마트'
// }))
const handleCellClick = (id: number) => {
  console.log(id)
}
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
            :columns="HistorySearchColumn"
            row-class-name="cilck_row"
            @cellClicked="handleCellClick"
          />
        </div>
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </section>
  </div>
</template>
