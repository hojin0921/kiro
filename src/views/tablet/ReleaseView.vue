<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="content view tablet bottom_btn">
    <h2>해당 정보로 <span>출고</span>하시겠습니까?</h2>
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
            <th>검사 일자</th>
            <td class="left">2023-05-01</td>
          </tr>
          <tr>
            <th>출고 일자</th>
            <td class="left">2023-05-01 07:00:00</td>
          </tr>
          <tr>
            <th>규격</th>
            <td class="left">그물망 - 3 kg</td>
          </tr>
          <tr>
            <th>수량</th>
            <td class="left">50 개</td>
          </tr>
          <tr>
            <th>총 무게</th>
            <td class="left">51.25 kg</td>
          </tr>
          <tr>
            <th>재고 무게</th>
            <td class="left">198.25 kg</td>
          </tr>
          <tr>
            <th>등급</th>
            <td class="left">특상</td>
          </tr>
          <tr>
            <th>배송지</th>
            <td class="left">B 마트</td>
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
