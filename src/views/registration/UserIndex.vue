<script setup lang="ts">
import CustomIcon from '@/components/CustomIcon.vue'
</script>

<template>
  <div class="cont">
    <div class="box indextab">
      <p>등록하실 내용의 분야를 선택해주세요</p>
      <ul>
        <li>
          <router-link to="/registration/user/user">
            <span><CustomIcon name="user_icont" /></span>
            사용자
          </router-link>
        </li>
        <li>
          <router-link to="/registration/user/office">
            <span><CustomIcon name="office_icont" /></span>소속
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
