<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="flex justify-center items-center mt-32 flex-col gap-3">
    <form
      id="login"
      class="w-[90%] md:w-[70%] lg:w-[35%] shadow-md rounded-xl h-auto p-4"
    >
      <input
        type="email"
        name="login-email"
        id="login-email"
        placeholder="Email"
        required
        class="w-full p-2 text-lgfont-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <input
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
        class="w-full p-2 text-lgfont-light border border-black-[1.3px] rounded-xl mb-4"
        required
      />
      <button
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
