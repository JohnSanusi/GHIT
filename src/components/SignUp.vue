<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { reactive } from "vue";

const router = useRouter();
const form = reactive({
  name: "",
  email: "",
  password: "",
});

const toast = useToast();

const handleSubmit = () => {
  const user = {
    name: form.name,
    email: form.email,
    password: form.password,
  };

  if (user.name === "" || user.email === "" || user.password === "") {
    toast.warning("Please Fill in all Inputs");
  } else {
    toast.success("Account created successfully ");

    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("password", user.password);

    form.name = "";
    form.email = "";
    form.password = "";

    setTimeout(() => {
      router.push({ name: "login" });
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
        v-model="form.name"
        type="text"
        name="name"
        id="name"
        placeholder="FullName"
        class="w-full p-2 text-lg font-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <input
        v-model="form.email"
        type="email"
        name="signup-email"
        id="signup-email"
        placeholder="Email"
        class="w-full p-2 text-lg font-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <input
        v-model="form.password"
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
        class="w-full p-2 text-lg font-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <button
        type="submit"
        id="signup-btn"
        class="w-full p-2 flex justify-center items-center bg-blue-500 text-lg text-white cursor-pointer rounded-xl hover:bg-blue-700 mb-5"
      >
        SignUp
      </button>
      <p class="text-center text-lg font-light">
        Already have an account?
        <RouterLink to="/login" class="text-blue-500 font-underline"
          >Login</RouterLink
        >
      </p>
    </form>
  </div>
</template>
