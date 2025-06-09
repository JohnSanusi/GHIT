<script setup>
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { reactive, ref } from "vue";
import { useMainStore } from "../stores/store";
const router = useRouter();

const store = useMainStore();
const email = ref("");
const password = ref("");
const error = ref("");
const toast = useToast();

const handleLogin = () => {
  if (email.value === "" || password.value === "") {
    toast.warning("Please Fill in all Inputs");
  } else {
    try {
      store.login({ email: email.value, password: password.value });
      error.value = "";
      toast.success(`Login successful`);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      toast.error(err.message);
      setTimeout(() => {
        router.push("/signup");
      }, 3000);
    }

    email.value = "";
    password.value = "";

    /*   setTimeout(() => {

  }, 3000); */
  }
};
</script>
<template>
  <div class="flex justify-center items-center mt-32 flex-col">
    <form
      @submit.prevent="handleLogin"
      id="login"
      class="w-[90%] md:w-[70%] lg:w-[35%] h-auto px-4"
    >
      <input
        v-model="email"
        type="email"
        name="login-email"
        id="login-email"
        placeholder="Email"
        class="w-full p-2 text-lgfont-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <input
        v-model="password"
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
        class="w-full p-2 text-lgfont-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <button
        type="submit"
        id="login-btn"
        class="w-full p-2 flex justify-center items-center bg-blue-500 text-2xl text-white cursor-pointer rounded-xl hover:bg-blue-700 mb-7"
      >
        Login
      </button>
    </form>
    <div
      class="flex flex-row justify-center items-center gap-2 w-[90%] md:w-[70%] lg:w-[30%]"
    >
      <hr
        class="w-[40%] md:w-[90%] lg:w-full text-gray-500 font-extralight mt-1"
      />
      <p class="text-2xl tracking-normal">or</p>
      <hr
        class="w-[40%] md:w-[90%] lg:w-full text-gray-500 font-extralight mt-1"
      />
    </div>
    <div
      class="flex flex-col md:flex-row lg:flex-row gap-3 justify-center items-center mt-4 w-[90%] md:w-[70%] lg:w-[45%]"
    >
      <button
        class="w-[90%] md:w-65 lg:w-50 h-12 border border-black-[1.4px] rounded-lg text-lg font-bold cursor-pointer hover:bg-black hover:text-white"
      >
        <i class="pi pi-google mr-0.5 font-extrabold"></i>Google
      </button>
      <button
        class="w-[90%] md:w-65 lg:w-50 h-12 border border-black-[1.4px] rounded-lg text-lg font-bold cursor-pointer hover:bg-black hover:text-white"
      >
        <i class="pi pi-apple mr-0.5 font-extrabold"></i>Apple
      </button>
    </div>

    <div class="mt-3">
      <p class="text-center text-lg font-light">
        No account?
        <NuxtLink to="/signup" class="text-blue-500 font-underline"
          >SignUp</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
