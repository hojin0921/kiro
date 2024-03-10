<script lang="ts" setup>
import { defineProps, ref, defineEmits } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
const emits = defineEmits(['update:selectedItems'])

const selectedItems = ref([])

const emitSelectedItems = () => {
  emits('update:selectedItems', selectedItems.value)
}
</script>
<template>
  <el-checkbox-group v-model="selectedItems">
    <el-checkbox
      v-for="name in props.items"
      :key="name"
      :label="name"
      :value="name"
      @change="emitSelectedItems"
    >
      {{ name }}
    </el-checkbox>
  </el-checkbox-group>
</template>
