<script setup lang="ts">
import { useRouter } from 'vue-router'
import CustomIcon from '@/components/CustomIcon.vue'
import { menuItems } from '@/data/menu'

const router = useRouter()

const isMenuActive = (path?: string) => {
  return router.currentRoute.value.name?.trim() == path?.trim()
}
</script>

<template>
  <nav>
    <h1><CustomIcon name="logo" alt="포항시산림조합" /></h1>
    <el-menu default-active="2" class="menu">
      <template v-for="menuItem in menuItems" :key="menuItem.index">
        <template v-if="menuItem.children">
          <el-sub-menu :index="menuItem.index">
            <template #title>
              <span class="icon" :class="menuItem.icon">
                <CustomIcon v-if="menuItem.icon" :name="menuItem.icon" />
              </span>
              <span class="name">{{ menuItem.title }}</span>
            </template>
            <template v-for="childItem in menuItem.children" :key="childItem.index">
              <router-link :to="childItem.toRouter || '/'">
                <el-menu-item
                  :index="childItem.index"
                  :class="{ active: isMenuActive(childItem.title) }"
                >
                  {{ childItem.title }}
                </el-menu-item>
              </router-link>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <router-link :to="menuItem.toRouter || '/'">
            <el-menu-item
              :index="menuItem.index"
              :disabled="menuItem.disabled"
              :class="{ active: isMenuActive(menuItem.title) }"
            >
              <span class="icon" :class="menuItem.icon">
                <CustomIcon v-if="menuItem.icon" :name="menuItem.icon" />
              </span>
              <template #title>
                <span class="name">{{ menuItem.title }}</span>
              </template>
            </el-menu-item>
          </router-link>
        </template>
      </template>
    </el-menu>
    <p class="copyright">Copyright System Information</p>
  </nav>
</template>
