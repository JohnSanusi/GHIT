//@ts-nocheck
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    allItems: [],
    likes: {},
    users: [],
    currentUser: null,
  }),
  getters: {
    allItemsCount: (state) => state.allItems?.length || 0,
    isLoggedIn: (state) => !!state.currentUser,
    getUserName: (state) => state.currentUser?.name || ",",
  },
  actions: {
    addProduct(product) {
      this.allItems.push({ ...product, type: "product" });
    },
    addCourse(course) {
      this.allItems.push({ ...course, type: "course" });
    },
    removeItem(id) {
      this.allItems = this.allItems.filter((item) => item.id !== id);
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
    signUp({ name, email, password }) {
      const exists = this.users.find((user) => user.email === email);
      if (exists) throw new Error("User already Exists");
      const newUser = { id: Date.now(), name, email, password };
      this.users.push(newUser);
      this.currentUser = newUser;
      console.log("users:", this.users);
    },
    login({ email, password }) {
      const user = this.users.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) throw new Error("invalid Login");
      this.currentUser = user;
    },
    logOut() {
      this.currentUser = null;
    },
  },

  persist: true,
});
