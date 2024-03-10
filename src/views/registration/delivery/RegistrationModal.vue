<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { deliveryFormModel, deliveryForm } from '@/data/region_form'

const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const productItemrules = reactive<FormRules<deliveryFormModel>>({
  delivery: [
    {
      validator: (rule, value, callback) => {
        if (value === 'A마트') {
          callback(new Error())
        } else {
          callback()
        }
      },
      message: '동일한 배송지명이 존재합니다.',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(deliveryForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form ref="ruleFormRef" label-width="120" :model="deliveryForm" :rules="productItemrules">
    <div class="body">
      <el-form-item label="배송지 명" prop="delivery">
        <el-input v-model="deliveryForm.delivery" />
      </el-form-item>
      <el-form-item label="담당자" prop="name">
        <el-input v-model="deliveryForm.name" />
      </el-form-item>
      <el-form-item label="연락처" prop="tel">
        <el-input v-model="deliveryForm.tel" placeholder="000-000-0000" />
      </el-form-item>
      <el-form-item label="배송차량" prop="car">
        <el-input v-model="deliveryForm.car" placeholder="000가 0000" />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')"> 취소 </el-button>
        <el-button
          class="ib"
          :disabled="deliveryForm.delivery.length === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
        >
          등록
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
