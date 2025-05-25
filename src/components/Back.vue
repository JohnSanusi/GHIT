<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="flex justify-center items-center fixed top-5 left-3 z-50"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <RouterLink
      to="/"
      class="cursor-pointer text-white bg-black rounded-md text-lg font-medium w-25 h-10 p-1 flex items-center justify-center"
    >
      <i class="pi pi-arrow-left text-lg mr-2"></i>
      back
    </RouterLink>
  </div>
</template>
