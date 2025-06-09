import { defineNuxtPlugin } from "#app";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedState);
  nuxtApp.vueApp.use(pinia);
});
