<script setup lang="ts">
import { ref } from 'vue'
import BoxTitle from '@/components/BoxTitle.vue'
import HeadArticle from './dashboard/HeadArticle.vue'
import TabComponent from './dashboard/TabComponent.vue'
import SituationComponent from './dashboard/SituationComponent.vue'
import ChartPie from './dashboard/ChartPie.vue'
import ChartRod from './dashboard/ChartRod.vue'
import MapModal from './dashboard/MapModal.vue'
import AlarmHistory from './dashboard/AlarmHistory.vue'
import StorageData from './dashboard/StorageData.vue'
import RobotData from './dashboard/RobotData.vue'
const mapDialog = ref(false)
</script>

<template>
  <div class="cont">
    <HeadArticle />
    <section class="dashboard scrollbar">
      <div class="boxs">
        <div class="box two">
          <div class="article">
            <BoxTitle title="금일 현황" tag="전체" />
            <SituationComponent />
          </div>
          <div class="article">
            <BoxTitle title="금일 선별 현황" tag="전체" />
            <ChartPie />
          </div>
        </div>
        <div class="box">
          <div class="article">
            <BoxTitle title="알림 내역" alarmt="4" />
            <AlarmHistory />
          </div>
        </div>
      </div>
      <div class="boxs">
        <div class="box two">
          <div class="article">
            <BoxTitle title="누적 업데이트 현황" />
            <SituationComponent />
          </div>
          <div class="article">
            <BoxTitle title="월별 현황" />
            <ChartRod />
          </div>
        </div>
        <div class="box">
          <div class="article">
            <TabComponent />
            <StorageData />
            <RobotData @click="mapDialog = true" />
          </div>
        </div>
      </div>
    </section>
    <el-dialog v-model="mapDialog" title="지도" width="960px" align-center>
      <MapModal @cancel="mapDialog = false" />
    </el-dialog>
  </div>
</template>

<style scoped>
@import '@/assets/css/dashboard.scss';
</style>
