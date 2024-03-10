<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { productItemFormModel, productItemForm } from '@/data/region_form'
import { el } from 'element-plus/es/locales.mjs'

const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const productItemrules = reactive<FormRules<productItemFormModel>>({
  itemName: [
    {
      validator: (rule, value, callback) => {
        if (value === '밤') {
          callback(new Error())
        } else {
          callback()
        }
      },
      message: '동일한 원물 품명이 존재합니다.',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(productItemForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form ref="ruleFormRef" label-width="50" :model="productItemForm" :rules="productItemrules">
    <div class="body">
      <el-form-item label="품목" prop="itemName">
        <el-input v-model="productItemForm.itemName" />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')"> 취소 </el-button>
        <el-button
          class="ib"
          :disabled="productItemForm.itemName.length === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
        >
          수정
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
