<script setup>
import { ref, defineProps, onMounted } from "vue";

import axios from "axios";

const courses = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      "https://ghit-backend.onrender.com/api/courses"
    );
    courses.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <main class="mt-8 p-8">
    <div
      id="container"
      class="flex flex-col gap-3 mt-5 md:flex md:flex-row md:flex-wrap md:gap-3 lg:flex lg:flex-row lg:gap-6"
    >
      <Course
        v-for="course in courses.slice(0, limit || courses.length)"
        :key="course.id"
        :course="course"
      />
    </div>
  </main>
</template>
