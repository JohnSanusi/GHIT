//@ts-nocheck
import axios from "axios";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    allItems: [],
    likes: {},
    user: null,
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
    async signUp(payload) {
      const { data } = await axios.post(
        "https://ghit-backend.onrender.com/api/auth/signup",
        payload,
        {
          withCredentials: true,
        }
      );

      this.user = data.user;
    },

    async login(payload) {
      const { data } = await axios.post(
        "https://ghit-backend.onrender.com/api/auth/login",
        payload,
        {
          withCredentials: true,
        }
      );

      this.user = data.user;

      this.currentUser = data.user;
    },
    async logOut() {
      await axios.post(
        "https://ghit-backend.onrender.com/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      this.user = null;
      this.currentUser = null;
    },
  },

  persist: true,
});
