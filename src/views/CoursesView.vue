<script setup>
import { ref, computed, reactive } from "vue";
import { useToast } from "vue-toastification";
import Back from "@/components/Back.vue";
import Courses from "@/components/Courses.vue";

const toast = useToast();
</script>

<template>
  <Back />
  <Courses />
</template>
