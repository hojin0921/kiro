<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'
import CustomIcon from '@/components/CustomIcon.vue'
import User from './user/index.vue'
import Office from './office/index.vue'
const router = useRouter()
const activeName = ref<string | null>('user')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
if (router.currentRoute.value.params.id) {
  activeName.value = router.currentRoute.value.params.id as string
}
</script>

<template>
  <div class="cont">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="user">
        <template #label>
          <span class="custom-tabs-label">
            <CustomIcon class="fill" name="user_icons" />
            <span>사용자</span>
          </span>
        </template>
        <User />
      </el-tab-pane>
      <el-tab-pane name="office">
        <template #label>
          <span class="custom-tabs-label">
            <CustomIcon class="stroke" name="office_icon" />
            <span>소속</span>
          </span>
        </template>
        <Office />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
