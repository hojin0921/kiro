<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="content view tablet bottom_btn">
    <h2>해당 정보로 <span>선별</span>하시겠습니까?</h2>
    <div class="tablet_table">
      <table>
        <colgroup>
          <col style="width: 28%" />
          <col style="*" />
        </colgroup>
        <tbody>
          <tr>
            <th>품목</th>
            <td class="left">떫은 감</td>
          </tr>
          <tr>
            <th>농가 명</th>
            <td class="left">산림농가1</td>
          </tr>
          <tr>
            <th>선별 일자</th>
            <td class="left">2023-05-01</td>
          </tr>
          <tr>
            <th>입고 일자</th>
            <td class="left">2023-05-01 07:00:00</td>
          </tr>
          <tr>
            <th>선별 무게 (kg)</th>
            <td class="left">51.25 kg</td>
          </tr>
          <tr>
            <th>수량</th>
            <td class="left">10</td>
          </tr>
          <tr>
            <th>총 무게</th>
            <td class="left">특</td>
          </tr>
          <tr>
            <th>재고 무게</th>
            <td class="left">라인 1</td>
          </tr>
          <tr>
            <th>등급</th>
            <td class="left">창고 A</td>
          </tr>
          <tr>
            <th>비고</th>
            <td class="left" style="height: 140px"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bottom_button">
      <div class="flex js">
        <div style="width: calc(50% - 10px)">
          <el-button type="info"> 뒤로 </el-button>
        </div>
        <div style="width: calc(50% - 10px)">
          <el-button type="success" @click="router.push('/tablet')"> 확인 </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
