<template>
  <div class="robot_data">
    <ul class="head">
      <li>
        <span>운송로봇</span>
        <span>위치</span>
        <span>상태</span>
      </li>
    </ul>
    <div>
      <ul class="body">
        <li class="wait">
          <span>운송로봇 1</span>
          <span>CP1</span>
          <span>
            <s>대기</s>
          </span>
        </li>
        <li class="run">
          <span>운송로봇 1</span>
          <span>CP1 -> CP3</span>
          <span>
            <s>운행</s>
          </span>
        </li>
        <li class="charging">
          <span>운송로봇 1</span>
          <span>CP1</span>
          <span>
            <s>충전중</s>
          </span>
        </li>
        <li class="off">
          <span>운송로봇 1</span>
          <span>CP1 -> CP3</span>
          <span>
            <s>Power Off</s>
          </span>
        </li>
        <li class="charging">
          <span>운송로봇 1</span>
          <span>CP1</span>
          <span>
            <s>충전중</s>
          </span>
        </li>
        <li class="off">
          <span>운송로봇 1</span>
          <span>CP1 -> CP3</span>
          <span>
            <s>Power Off</s>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/css/dashboard.scss';
</style>
