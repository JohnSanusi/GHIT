<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Course from "./Course.vue";

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
  <section id="courses" class="flex flex-col gap-6 p-8 bg-slate-50">
    <div
      class="flex flex-col gap-1 justify-center items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <button
        class="text-black rounded-2xl text-sm font-medium border-gray-300 border-[1.8px] w-40 h-7 p-1 flex justify-center items-center mb-2"
      >
        Our Programs
      </button>
      <h1 class="font-sans font-bold text-4xl md:text-6xl lg:6xl">
        Featured Courses
      </h1>
      <p
        class="text-base text-gray-700 font-light mt-1.5 font-sans lg:text-lg text-center"
      >
        Discover our most popular courses across multiple tech disciplines,
        designed to help you master the skills employers are looking for.
      </p>
    </div>
    <div class="mt-6">
      <div
        id="container"
        class="flex flex-col gap-3 mt-5 md:flex md:flex-row md:flex-wrap md:gap-3 lg:flex lg:flex-row lg:gap-6"
      >
        <Course
          v-for="course in courses.slice(0, 6)"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
    <div
      class="mt-10 flex justify-center items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <RouterLink
        to="/courses"
        class="cursor-pointer text-black border-gray-500 border-[1.8px] rounded-md text-lg font-medium w-50 h-15 p-1 flex items-center justify-center hover:shadow-xl"
      >
        View All Courses <i class="pi pi-arrow-right text-lg ml-2 mt-0.5"></i>
      </RouterLink>
    </div>
  </section>
</template>
