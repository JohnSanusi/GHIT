import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    allItems: [],
  }),
  getters: {
    allItemsCount: (state) => state.allItems?.length || 0,
  },
  actions: {
    addProduct(product) {
      this.allItems.push({ ...product, type: "product" });
    },
    addCourse(course) {
      this.allItems.push({ ...course, type: "course" });
    },
    clearAll(){
      this.allItems = []
    }
  },
   persist: true,
});
