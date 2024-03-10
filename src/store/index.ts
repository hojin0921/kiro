import { defineStore } from 'pinia'

export const useHeightStore = defineStore('height', {
  state: () => ({
    containerHeight: 0 // 높이 값을 저장할 상태
  }),
  actions: {
    setContainerHeight(height: number) {
      this.containerHeight = height // 높이 값을 저장하는 액션
    }
  }
})
