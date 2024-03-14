<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const value = ref('')
const value1 = ref('2023-04-01')
const value2 = ref('')
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
        <el-form-item label="선별내역">
          <el-select popper-class="tablet" v-model="value" placeholder="선별 내역 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="등급">
          <el-select popper-class="tablet" v-model="value" disabled placeholder="등급 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <div class="flex js" style="padding-top: 25px">
          <div style="width: calc(50% - 10px)">
            <el-form-item label="검사 일자">
              <el-date-picker
                v-model="value1"
                type="datetime"
                disabled
                popper-class="tablet_data_picker"
                size="default"
                editable="false"
                clearable="false"
              />
            </el-form-item>
          </div>

          <div style="width: calc(50% - 10px)">
            <el-form-item label="입고 일자">
              <el-date-picker
                v-model="value2"
                type="datetime"
                popper-class="tablet_data_picker"
                size="default"
                placeholder="입고 일자"
                editable="false"
                clearable="false"
              />
            </el-form-item>
          </div>
        </div>
        <el-form-item label="규격(종류-무게)">
          <el-select popper-class="tablet" v-model="value" placeholder="종류 - 무게">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="수량 (개)">
          <el-select popper-class="tablet" v-model="value" placeholder="0">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <div class="flex js" style="padding-top: 25px">
          <div style="width: calc(50% - 10px)">
            <el-form-item label="총 무게">
              <el-input />
            </el-form-item>
          </div>

          <div style="width: calc(50% - 10px)">
            <el-form-item label="재고 무게">
              <el-input disabled />
            </el-form-item>
          </div>
        </div>
        <el-form-item label="배송지">
          <el-select popper-class="tablet" v-model="value" placeholder="배송지 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="비고">
          <el-input :autosize="{ minRows: 5, maxRows: 4 }" type="textarea" />
        </el-form-item>
      </div>
      <div class="dialog-footer fxend bottom_button">
        <el-form-item>
          <el-button type="success" @click="router.push('/tablet/release_view')"> 출고 </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
