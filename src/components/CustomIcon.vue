<template>
  <component :is="icon" :class="className" />
</template>

<script lang="ts">
import { defineAsyncComponent, defineProps } from 'vue'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'fill-current'
    }
  },
  setup(props) {
    const icon = defineAsyncComponent(() => import(`../assets/svg/${props.name}.svg`))

    return {
      icon
    }
  }
}
</script>
