<script setup lang="ts">
import { defineEmits, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { userFormModel, userForm } from '@/data/region_form'

const emits = defineEmits(['cancel'])
const ruleFormRef = ref<FormInstance>()

const productItemrules = reactive<FormRules<userFormModel>>({
  password: [
    {
      required: true,
      message: '비밀번호를 입력해주세요.',
      trigger: 'blur'
    }
  ],
  passwordAgain: [
    {
      validator: (rule, value, callback) => {
        if (value !== userForm.password) {
          callback(new Error())
        } else {
          callback()
        }
      },
      message: '비밀번호가 일치하지 않습니다.',
      trigger: 'blur'
    }
  ],
  name: [
    {
      required: true,
      message: '이름을 입력해주세요.',
      trigger: 'blur'
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(userForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form ref="ruleFormRef" label-width="120" :model="userForm" :rules="productItemrules">
    <div class="body">
      <el-form-item label="비밀번호" prop="password">
        <el-input v-model="userForm.password" type="password" />
        <p class="alert">* 영문/한글/숫자/특수문자(!@#$%^&*) 7~12자</p>
      </el-form-item>
      <el-form-item label="비밀번호 확인" prop="passwordAgain">
        <el-input v-model="userForm.passwordAgain" type="password" />
      </el-form-item>
      <el-form-item label="이름" prop="name">
        <el-input v-model="userForm.name" />
      </el-form-item>
      <el-form-item label="연락처" prop="tel">
        <el-input v-model="userForm.tel" placeholder="000-000-0000" />
      </el-form-item>
      <el-form-item label="소속" prop="office">
        <el-select v-model="userForm.office" placeholder="소속 선택"> </el-select>
      </el-form-item>
      <el-form-item label="권한" prop="power">
        <el-select v-model="userForm.power" placeholder="권한 선택"> </el-select>
      </el-form-item>
      <el-form-item label="비고" prop="note">
        <el-input v-model="userForm.note" :autosize="{ minRows: 4, maxRows: 4 }" type="textarea" />
      </el-form-item>
    </div>
    <div class="dialog-footer fxend">
      <el-form-item>
        <el-button class="ib" type="info" @click="() => emits('cancel')"> 취소 </el-button>
        <el-button
          class="ib"
          :disabled="userForm.password.length === 0"
          type="success"
          @click="submitForm(ruleFormRef)"
        >
          수정
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
