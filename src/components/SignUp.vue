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
        type="text"
        name="name"
        id="name"
        placeholder="FullName"
        required
        class="w-full p-2 text-lg font-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <input
        type="email"
        name="signup-email"
        id="signup-email"
        placeholder="Email"
        required
        class="w-full p-2 text-lg font-light border border-black-[1.3px] rounded-xl mb-4"
      />
      <input
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
        class="w-full p-2 text-lg font-light border border-black-[1.3px] rounded-xl mb-4"
        required
      />
      <button
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
