<script setup lang="ts">
import CustomIcon from '@/components/CustomIcon.vue'
</script>

<template>
  <div class="cont">
    <div class="box indextab">
      <p>등록하실 내용의 분야를 선택해주세요</p>
      <ul>
        <li>
          <router-link to="/registration/product/item">
            <span><CustomIcon name="item_icont" /></span>
            임산물 품목
          </router-link>
        </li>
        <li>
          <router-link to="/registration/product/farmhouse">
            <span><CustomIcon name="farmhouse_icont" /></span>농가
          </router-link>
        </li>
        <li>
          <router-link to="/registration/product/standard">
            <span><CustomIcon name="standard_icont" /></span>규격
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
