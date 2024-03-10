<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
</script>
<template>
  <div class="cont">
    <div class="alarm_box">
      <div class="alarm_title">제1창고</div>
      <ul>
        <li>
          <div class="ti">창고 센서 알림 온도 설정</div>
          <div class="set">
            <div class="switch">
              <span>설정값</span>
              <el-switch v-model="value1" inline-prompt active-text="ON" inactive-text="OFF" />
            </div>
            <ul class="data">
              <li>
                <strong>경고</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
              <li>
                <strong>심각</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="ti">창고 센서 알림 습도 설정</div>
          <div class="set">
            <div class="switch">
              <span>설정값</span>
              <el-switch v-model="value1" inline-prompt active-text="ON" inactive-text="OFF" />
            </div>
            <ul class="data">
              <li>
                <strong>경고</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
              <li>
                <strong>심각</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="alarm_box">
      <div class="alarm_title">제2창고</div>
      <ul>
        <li>
          <div class="ti">창고 센서 알림 온도 설정</div>
          <div class="set">
            <div class="switch">
              <span>설정값</span>
              <el-switch v-model="value1" inline-prompt active-text="ON" inactive-text="OFF" />
            </div>
            <ul class="data">
              <li>
                <strong>경고</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
              <li>
                <strong>심각</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="ti">창고 센서 알림 습도 설정</div>
          <div class="set">
            <div class="switch">
              <span>설정값</span>
              <el-switch v-model="value1" inline-prompt active-text="ON" inactive-text="OFF" />
            </div>
            <ul class="data">
              <li>
                <strong>경고</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
              <li>
                <strong>심각</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="alarm_box">
      <div class="alarm_title">제3창고</div>
      <ul>
        <li>
          <div class="ti">창고 센서 알림 온도 설정</div>
          <div class="set">
            <div class="switch">
              <span>설정값</span>
              <el-switch v-model="value1" inline-prompt active-text="ON" inactive-text="OFF" />
            </div>
            <ul class="data">
              <li>
                <strong>경고</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
              <li>
                <strong>심각</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="ti">창고 센서 알림 습도 설정</div>
          <div class="set">
            <div class="switch">
              <span>설정값</span>
              <el-switch v-model="value1" inline-prompt active-text="ON" inactive-text="OFF" />
            </div>
            <ul class="data">
              <li>
                <strong>경고</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
              <li>
                <strong>심각</strong>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이하 /</span>
                <el-select placeholder="12" style="width: 130px" />
                <span>°C 이상</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/alarm_box.scss';
</style>
