<script setup lang="ts">
import { reactive, ref } from 'vue'
import CustomIcon from '@/components/CustomIcon.vue'
const formLabelAlign = reactive({
  id: '',
  password: ''
})
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="login_page tablet">
    <div class="login_box">
      <h1><CustomIcon name="login_logo" alt="포항시산림조합" /></h1>
      <div class="form">
        <h2>Login</h2>
        <el-form label-position="top">
          <el-form-item label="아이디">
            <el-input v-model="formLabelAlign.id" />
          </el-form-item>
          <el-form-item label="비밀번호" class="mt20">
            <el-input type="password" v-model="formLabelAlign.password" />
          </el-form-item>
          <div class="error_color err">
            사용자로 등록되지 않은 아이디거나, 아이디 또는 비밀번호를 잘못 입력하셨습니다.
          </div>
          <el-button size="large" type="primary" @click="router.push('/tablet/')">로그인</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/login.scss';
</style>
