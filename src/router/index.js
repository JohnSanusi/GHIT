import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoursesView from "@/views/CoursesView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";
import ProductsView from "@/views/ProductsView.vue";
import SavedView from "@/views/SavedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/courses",
      name: "courses",
      component: CoursesView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/saved",
      name: "saved",
      component: SavedView,
    },
  ],
});

export default router;
