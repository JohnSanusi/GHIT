<script setup>
import { useRouter } from "vue-router";

import { ref } from "vue";
import { useMainStore } from "../stores/store";
const store = useMainStore();

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");

const toast = inject("toast");

const handleSignUp = () => {
  if (name.value === "" || email.value === "" || password.value === "") {
    toast.warning("Please Fill in all Inputs");
  } else {
    try {
      store.signUp({
        name: name.value,
        email: email.value,
        password: password.value,
      });
      error.value = "";
      toast.success("Account created successfully ");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err) {
      toast.error(err.message);
    }

    name.value = "";
    email.value = "";
    password.value = "";
  }
};
</script>
<template>
  <div class="flex justify-center items-center flex-col mt-32 gap-3">
    <div class="w-[90%] md:w-[70%] lg:w-[45%]">
      <h1
        class="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wide text-center"
      >
        Create An Account
      </h1>
      <p class="text-center mt-1 font-light text-base lg:text-lg">
        Enter your personal data to create an account
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row lg:flex-row gap-3 justify-center items-center mt-2 w-[90%] md:w-[70%] lg:w-[45%]"
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
    <div
      class="flex flex-row justify-center items-center gap-2 w-[90%] md:w-[70%] lg:w-[45%] mt-2"
    >
      <hr
        class="w-[40%] md:w-[90%] lg:w-full text-gray-500 font-extralight mt-1"
      />
      <p class="text-2xl tracking-normal">or</p>
      <hr
        class="w-[40%] md:w-[90%] lg:w-full text-gray-500 font-extralight mt-1"
      />
    </div>
    <form
      @submit.prevent="handleSignUp"
      id="login"
      class="w-[90%] md:w-[70%] lg:w-[45%] shadow-md rounded-xl h-auto p-4"
    >
      <div class="flex flex-col md:flex-row lg:flex-row gap-x-3">
        <div class="w-full md:w-[50%] lg:w-[49%]">
          <label for="name" class="text-xl font-semibold tracking-wide mb-4"
            >FullName</label
          >
          <input
            v-model="name"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            class="w-full p-3 text-base font-light border border-black-[1.3px] rounded-xl mb-2 mr-3"
          />
        </div>
        <div class="w-full md:w-[50%] lg:w-[49%]">
          <label for="email" class="text-xl font-semibold tracking-wide mb-4"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            name="signup-email"
            id="signup-email"
            placeholder="Enter Email"
            class="w-full p-3 text-base font-light border border-black-[1.3px] rounded-xl mb-2"
          />
        </div>
      </div>
      <div>
        <label for="password" class="text-xl font-semibold tracking-wide mb-4"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          name="login-password"
          id="login-password"
          placeholder="* * * * * * * * * *"
          class="w-full p-3 text-base font-light border border-black-[1.3px] rounded-xl mb-4"
        />
      </div>
      <button
        type="submit"
        id="signup-btn"
        class="w-full p-3 flex justify-center items-center bg-blue-500 text-2xl text-white cursor-pointer rounded-xl hover:bg-blue-700 mb-5"
      >
        SignUp
      </button>
      <p class="text-center text-lg font-light">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-500 font-underline"
          >Login</NuxtLink
        >
      </p>
    </form>
  </div>
</template>
