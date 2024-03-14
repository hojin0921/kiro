<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const value = ref('')
const router = useRouter()
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>
<template>
  <div class="content tablet bottom_btn">
    <h2>{{ router.currentRoute.value.name }}</h2>
    <el-form ref="ruleFormRef" label-width="50" label-position="top">
      <div class="body">
        <el-form-item label="운송 로봇">
          <el-select popper-class="tablet" v-model="value" placeholder="운송 로봇 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <div class="tablet_table">
          <table>
            <colgroup>
              <col style="width: 33%" />
              <col style="width: 34%" />
              <col style="width: 33%" />
            </colgroup>
            <thead>
              <tr>
                <th>상태</th>
                <th>시작 위치</th>
                <th>종료 위치</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <el-form-item label="이동 위치">
          <el-select popper-class="tablet" v-model="value" placeholder="포인트 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </div>
      <div class="dialog-footer fxend bottom_button">
        <el-form-item>
          <el-button type="success"> 주행시작 </el-button>
        </el-form-item>
        <div class="flex js" style="margin-top: 12px">
          <div style="width: calc(50% - 10px)">
            <el-form-item>
              <el-button class="bo_green"> 일시정지 </el-button>
            </el-form-item>
          </div>
          <div style="width: calc(50% - 10px)">
            <el-form-item>
              <el-button class="bo_green" @click="router.push('/tablet/')"> 주행취소 </el-button>
            </el-form-item>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>
