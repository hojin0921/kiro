<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { productResidualFormModel, productResidualForm } from '@/data/region_form'

const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(productResidualForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
const tableData = [
  {
    name: '재고 수량(kg)',
    kg: 11.7
  },
  {
    name: '낙과 수량(kg)',
    kg: 11.7
  }
]
</script>

<template>
  <el-form ref="ruleFormRef" label-width="70" :model="productResidualForm">
    <div class="body">
      <el-form-item label="낙과" prop="kg">
        <el-input
          class="txr"
          v-model="productResidualForm.kg"
          :formatter="(value: any) => `${value} kg`"
          :parser="(value: string) => value.replace(/[^0-9.]/g, '')"
          style="width: 200px"
        />
        <el-button class="ib"> 미리 계산 </el-button>
        <el-table class="thtable" :data="tableData" border style="width: 100%" :show-header="false">
          <el-table-column prop="name" class-name="th" width="140" />
          <el-table-column>
            <template #default="row"> {{ row.row.kg }} kg </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="비고" prop="note">
        <el-input
          v-model="productResidualForm.note"
          :autosize="{ minRows: 6, maxRows: 4 }"
          type="textarea"
          placeholder="변경 사유를 작성해주세요."
        />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')" style="width: 112px">
          취소
        </el-button>
        <el-button
          class="ib"
          :disabled="productResidualForm.kg === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
          style="width: 112px"
        >
          적용
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
