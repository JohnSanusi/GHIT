<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://ghit-backend.onrender.com/api/products"
    );
    products.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <main class="mt-8 p-8">
    <div
      id="container"
      class="flex flex-col gap-2 md:flex md:flex-row md:flex-wrap md:gap-3 lg:flex lg:flex-row lg:gap-6"
    >
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>
