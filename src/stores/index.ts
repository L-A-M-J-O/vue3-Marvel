import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('state', {
  state: () => ({
    stat: true,
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    change() {
      setTimeout(() => {
        this.stat = false
      }, 6000)
    },
  },
})
