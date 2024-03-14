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
        <el-form-item label="품목">
          <el-select popper-class="tablet" v-model="value" placeholder="품목 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="농가 명">
          <el-select popper-class="tablet" v-model="value" placeholder="농가 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="입고 내역">
          <el-select popper-class="tablet" v-model="value" placeholder="입고 내역 선택">
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
                <th>일련번호</th>
                <th>입고 일시</th>
                <th>입고 무게 (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>0000-00-00<br />00:00:00</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex js" style="padding-top: 25px">
          <div style="width: calc(50% - 10px)">
            <el-form-item label="선별 무게(kg)">
              <el-input />
            </el-form-item>
          </div>

          <div style="width: calc(50% - 10px)">
            <el-form-item label="낙과 무게(kg)">
              <el-input />
            </el-form-item>
          </div>
        </div>
        <el-form-item label="등급">
          <el-select popper-class="tablet" v-model="value" placeholder="등급 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="선별 위치">
          <el-select popper-class="tablet" v-model="value" placeholder="장소 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="보관 위치">
          <el-input />
        </el-form-item>
        <el-form-item label="비고">
          <el-input :autosize="{ minRows: 5, maxRows: 4 }" type="textarea" />
        </el-form-item>
      </div>
      <div class="dialog-footer fxend bottom_button">
        <el-form-item>
          <el-button type="success" @click="router.push('/tablet/selection_view')">
            선별
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
