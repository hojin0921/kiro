<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import CheckboxGroup from '@/components/CheckboxGroup.vue'
import { productFarmhouseFormModel, productFarmhouseForm } from '@/data/region_form'
import { farmhouseCheckboxGroup } from '@/data/checkbox_group'

const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const productFarmhouserules = reactive<FormRules<productFarmhouseFormModel>>({
  name: [
    {
      validator: (rule, value, callback) => {
        if (value == '산림농가1') {
          callback(new Error())
        } else {
          callback()
        }
      },
      message: '중복된 농가가 존재합니다.',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(productFarmhouseForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const handleSelectedItemsChange = (items: string[]) => {
  productFarmhouseForm.items = items
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
    label-width="90"
    :model="productFarmhouseForm"
    :rules="productFarmhouserules"
  >
    <div class="body">
      <el-form-item label="대표자" prop="agent">
        <el-input v-model="productFarmhouseForm.agent" />
      </el-form-item>
      <el-form-item label="연락처" prop="tel">
        <el-input v-model="productFarmhouseForm.tel" type="number" placeholder="000-0000-0000" />
      </el-form-item>
      <el-form-item label="농가명" prop="name">
        <el-input v-model="productFarmhouseForm.name" />
      </el-form-item>
      <el-form-item label="대표차량" prop="car">
        <el-input v-model="productFarmhouseForm.car" placeholder="000가 0000" />
      </el-form-item>
      <el-form-item label="대표품목" prop="items">
        <CheckboxGroup
          :items="farmhouseCheckboxGroup"
          @update:selectedItems="handleSelectedItemsChange"
        />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')"> 취소 </el-button>
        <el-button
          class="ib"
          :disabled="productFarmhouseForm.name.length === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
        >
          수정
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
