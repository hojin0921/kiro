<script setup lang="ts">
import { ref } from 'vue'
import HeadInquiry from './inquiry/Notification.vue'
import CheckboxGroup from '@/components/CheckboxGroup.vue'
import TableList from '@/components/TableList.vue'
import { NotificationColumn } from '@/data/column'
import { NotificationCheckboxGroup } from '@/data/checkbox_group'
const extendedData = [...Array(20)].map((_, index) => ({
  id: index + 1,
  system: index % 2 === 0 ? '창고 센서' : '운송 로봇',
  level: index % 3 === 0 ? '경고' : index % 2 === 0 ? '심각' : '일반',
  explanation: `습도 상승 알림 (60%)`,
  occurrence: '2021-07-01 10:00',
  whether: index % 3 === 0 ? '확인' : index % 2 === 0 ? '미확인' : '-'
}))
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
        <div class="list_top">
          <div class="text">
            <strong>* 2023.04.01 - 2023.05.15 / 밤 / 전체</strong>
            조회 결과 입니다.
          </div>
          <CheckboxGroup
            :items="NotificationCheckboxGroup"
            @update:selectedItems="handleSelectedItemsChange"
          />
        </div>
        <div style="height: calc(100% - 103px)">
          <TableList :data="extendedData" :columns="NotificationColumn" />
        </div>
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </section>
  </div>
</template>
