<script setup>
definePageMeta({
  layout: "minimal",
});

import { useToast } from "vue-toastification";

const toast = useToast();
</script>

<template>
  <Courses />
</template>
