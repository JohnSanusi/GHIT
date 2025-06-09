import Toastification from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const { useToast } = Toastification;

  nuxtApp.provide(
    "toast",
    useToast({
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  );
});
