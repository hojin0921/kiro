<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { productRobotFormModel, productRobotForm } from '@/data/region_form'

const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const productItemrules = reactive<FormRules<productRobotFormModel>>({
  robotName: [
    {
      validator: (rule, value, callback) => {
        if (value === '운송로봇1') {
          callback(new Error())
        } else {
          callback()
        }
      },
      message: '동일한 로봇 명이 존재합니다.',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(productRobotForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form ref="ruleFormRef" label-width="70" :model="productRobotForm" :rules="productItemrules">
    <div class="body">
      <el-form-item label="로봇명" prop="robotName">
        <el-input v-model="productRobotForm.robotName" />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')"> 취소 </el-button>
        <el-button
          class="ib"
          :disabled="productRobotForm.robotName.length === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
        >
          등록
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
