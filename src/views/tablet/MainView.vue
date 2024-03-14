<script setup lang="ts">
import { useRouter } from 'vue-router'
import CustomIcon from '@/components/CustomIcon.vue'
const router = useRouter()
</script>
<template>
  <div class="content tablet">
    <h2>{{ router.currentRoute.value.name }}</h2>
    <div class="tablet_btn">
      <div class="btn">
        <i><CustomIcon name="tablet_receiving" /></i>
        입고
      </div>
      <div class="flex js" style="padding-top: 8px">
        <div style="width: calc(50% - 4px)">
          <router-link to="/tablet/receiving"> 기본 입고 </router-link>
        </div>

        <div style="width: calc(50% - 4px)">
          <router-link to="/tablet/receiving"> 선별 입고 </router-link>
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/tablet/release" class="btn">
            <i><CustomIcon name="tablet_release" /></i>
            출고
          </router-link>
        </li>
        <li>
          <router-link to="/tablet/selection" class="btn">
            <i><CustomIcon name="tablet_selection" /></i>
            선별
          </router-link>
        </li>
        <li>
          <router-link to="/tablet/robot" class="btn">
            <i><CustomIcon name="tablet_robot" /></i>
            운송로봇
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.tablet_layout {
  background-color: #f7f7f7;
}
</style>
