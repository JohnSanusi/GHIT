import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    allItems: [],
    likes: {},
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
    clearAll() {
      this.allItems = [];
    },
    toggleLike(id) {
      this.likes[id] = !this.likes[id];
    },
    isLiked(id) {
      return !!this.likes[id];
    },
  },
  persist: true,
});
