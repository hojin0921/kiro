<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { officeFormModel, officeForm } from '@/data/region_form'

const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const productItemrules = reactive<FormRules<officeFormModel>>({
  name: [
    {
      validator: (rule, value, callback) => {
        if (value === '포항산림청') {
          callback(new Error())
        } else {
          callback()
        }
      },
      message: '동일한 소속명이 존재합니다.',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(officeForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form ref="ruleFormRef" label-width="80" :model="officeForm" :rules="productItemrules">
    <div class="body">
      <el-form-item label="소속명" prop="name">
        <el-input v-model="officeForm.name" />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')"> 취소 </el-button>
        <el-button
          class="ib"
          :disabled="officeForm.name.length === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
        >
          등록
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
