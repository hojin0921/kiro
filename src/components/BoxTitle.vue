<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: null
  },
  alarmt: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="box_title">
    <p class="title">
      {{ props.title }}
      <i v-if="props.alarmt" class="alarm">{{ props.alarmt }}</i>
    </p>
    <span v-if="props.tag" class="tag">{{ props.tag }}</span>
  </div>
</template>
