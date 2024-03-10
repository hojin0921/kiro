M
<template>
  <div class="body">
    <div class="flex js is">
      <div style="width: 480px">
        <p class="info_title">{{ props.title }} 내역</p>
        <table class="info_table">
          <colgroup>
            <col style="width: 180px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>품명</th>
              <td>밤</td>
            </tr>
            <tr>
              <th>입고 일시</th>
              <td>2023년 4월 28일 15:22</td>
            </tr>
            <tr>
              <th>생산 일자</th>
              <td>2023년 4월 28일</td>
            </tr>
            <tr>
              <th>농가 명</th>
              <td>산림농가1</td>
            </tr>
            <tr>
              <th>담당자</th>
              <td>테스터1</td>
            </tr>
            <tr>
              <th>규격</th>
              <td>플라스틱 Box - 3 kg</td>
            </tr>
            <tr>
              <th>수량</th>
              <td>10</td>
            </tr>
            <tr>
              <th>총 무게(kg)</th>
              <td>29.8</td>
            </tr>
            <tr>
              <th>보관위치</th>
              <td>임시보관</td>
            </tr>
            <tr>
              <th>차량번호</th>
              <td>01가 0011</td>
            </tr>
            <tr>
              <th>비고</th>
              <td>
                <div class="note"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info_modify">
        <div class="ti">회수 수량 (kg)</div>
        <el-input />
        <div class="ti">회수 사유</div>
        <el-input :autosize="{ minRows: 23, maxRows: 4 }" type="textarea" />
      </div>
    </div>
  </div>
  <div class="dialog-footer fxcen">
    <el-button class="ib" type="info" @click="() => emits('cancel')">취소</el-button>
    <el-button class="ib" type="success" @click="() => emits('cancel')"> 확인 </el-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
const props = defineProps({
  title: {
    type: String
  }
})

const emits = defineEmits(['cancel'])
</script>
