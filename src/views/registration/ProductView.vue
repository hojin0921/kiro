<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'
import CustomIcon from '@/components/CustomIcon.vue'
import Item from './item/index.vue'
import Farmhouse from './farmhouse/index.vue'
import Standard from './standard/index.vue'
const router = useRouter()
const activeName = ref<string | null>('item')
const handleClick = (tab: TabsPaneContext, event: Event) => {}
if (router.currentRoute.value.params.id) {
  activeName.value = router.currentRoute.value.params.id as string
}
</script>

<template>
  <div class="cont">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="item">
        <template #label>
          <span class="custom-tabs-label">
            <CustomIcon class="stroke" name="item_icon" />
            <span>임산물 품목</span>
          </span>
        </template>
        <Item />
      </el-tab-pane>
      <el-tab-pane name="farmhouse">
        <template #label>
          <span class="custom-tabs-label">
            <CustomIcon class="stroke" name="farmhouse_icon" />
            <span>농가</span>
          </span>
        </template>
        <Farmhouse />
      </el-tab-pane>
      <el-tab-pane name="standard">
        <template #label>
          <span class="custom-tabs-label">
            <CustomIcon class="fill" name="standard_icon" />
            <span>규격</span>
          </span>
        </template>
        <Standard />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
