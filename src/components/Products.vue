<script setup>
import ProductData from "@/products.json";
import { ref } from "vue";
import Product from "./Product.vue";

const products = ref(ProductData);
</script>
<template>
  <main class="mt-20 p-8">
    <div
      id="container"
      class="flex flex-col gap-2 mt-5 md:flex md:flex-row md:flex-wrap md:gap-3 lg:flex lg:flex-row lg:gap-6"
    >
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>
