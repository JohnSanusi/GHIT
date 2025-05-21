<script setup>
import CourseData from "@/courses.json";
import { ref, defineProps } from "vue";
import Course from "./Course.vue";

const courses = ref(CourseData);
</script>
<template>
  <main class="mt-20 p-8">
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
