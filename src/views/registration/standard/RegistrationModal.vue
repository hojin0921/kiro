<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { productStandardFormModel, productStandardForm } from '@/data/region_form'
const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const productItemrules = reactive<FormRules<productStandardFormModel>>({
  name: [
    {
      validator: (rule, value, callback) => {
        if (value === '플라스틱 Box') {
          callback(new Error())
        } else {
          callback()
        }
      },
      message: '동일한 규격이 존재합니다.',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(productStandardForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
    label-width="120"
    :model="productStandardForm"
    :rules="productItemrules"
  >
    <div class="body">
      <el-form-item label="규격 종류" prop="name">
        <el-input v-model="productStandardForm.name" />
      </el-form-item>
      <el-form-item label="규격 무게(kg)" prop="kg">
        <el-input v-model="productStandardForm.kg" placeholder="-" />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')"> 취소 </el-button>
        <el-button
          class="ib"
          :disabled="productStandardForm.name.length === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
        >
          등록
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
