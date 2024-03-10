<script setup lang="ts">
import BoxTitle from '@/components/BoxTitle.vue'
import { showAlert } from '@/components/alertUtils'
import SummaryInfo from './statistics/SummaryInfo.vue'
import ChartSearch from './statistics/ChartSearch.vue'
import ChartRod from './statistics/ChartRod.vue'
import ChartHorizontal from './statistics/ChartHorizontal.vue'
import AllSum from './statistics/AllSum.vue'
</script>

<template>
  <div class="cont">
    <section class="statistics">
      <div class="list_top end">
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
      <SummaryInfo />
      <div class="boxs">
        <div class="cell">
          <div class="box data">
            <div class="article">
              <ChartSearch />
              <hr class="line" />
              <ChartRod />
              <BoxTitle title="선별" style="margin-top: 24px" />
              <ChartHorizontal />
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="box" style="min-height: 689px">
            <div class="article">
              <BoxTitle title="정상 및 불량 합계" />
              <AllSum />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '@/assets/css/statistics.scss';
</style>
