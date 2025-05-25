<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { reactive } from "vue";
const router = useRouter();
const form = reactive({
  email: "",
  password: "",
});

const toast = useToast();
const savedName = localStorage.getItem("name");
const savedEmail = localStorage.getItem("email");
const savedPassword = localStorage.getItem("password");
const handleSubmit = () => {
  if (form.email === "" || form.password === "") {
    toast.warning("Please Fill in all Inputs");
  } else if (form.email !== savedEmail || form.password !== savedPassword) {
    toast.error("Invalid user, Check email and password");
  } else {
    toast.success(`Login successful, Welcome ${savedName}`);
    form.email = "";
    form.password = "";

    setTimeout(() => {
      router.push({ name: "home" });
    }, 6000);
  }
};
</script>
<template>
  <div class="flex justify-center items-center mt-32 flex-col gap-3">
    <form
      @submit.prevent="handleSubmit"
      id="login"
      class="w-[90%] md:w-[70%] lg:w-[35%] shadow-md rounded-xl h-auto p-4"
    >
      <input
        v-model="form.email"
        type="email"
        name="login-email"
        id="login-email"
        placeholder="Email"
        class="w-full p-2 text-lgfont-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <input
        v-model="form.password"
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
      <p class="text-center text-lg font-light">
        No account?
        <RouterLink to="/signup" class="text-blue-500 font-underline"
          >SignUp</RouterLink
        >
      </p>
    </form>
  </div>
</template>
