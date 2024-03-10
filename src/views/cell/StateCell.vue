<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: String,
    default: '  '
  }
})
</script>
<template>
  <div
    class="robot_state"
    :class="[
      props.data == '대기'
        ? 'standby'
        : props.data == '운행'
          ? 'run'
          : props.data == '충전'
            ? 'charge'
            : 'excavation'
    ]"
  >
    {{ props.data }}
  </div>
</template>
<style scoped>
.serious {
  color: #b20021;
}
.warning {
  color: #3b76bd;
}
</style>
