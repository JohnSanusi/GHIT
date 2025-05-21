<script setup>
import { defineProps, ref, onMounted, watch } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  product: Object,
});

let Plike = ref(false);

const storageKeyTwo = `like${props.product.id}`;

onMounted(() => {
  const saves = localStorage.getItem(storageKeyTwo);
  if (saves) Plike.value = JSON.parse(saves);
});

watch(Plike, (vals) => {
  localStorage.setItem(storageKeyTwo, JSON.stringify(vals));
});
const toggleLike = () => {
  Plike.value = !Plike.value;
};
</script>
<template>
  <div
    class="flex flex-col justify-between gap-1.5 w-full h-auto shadow-lg md:w-[48%] lg:w-[32%] p-3 rounded-lg"
    data-aos="fade-in"
    data-aos-duration="1000"
  >
    <div class="mt-2 flex justify-between items-baseline mb-1">
      <p
        class="text-[13px] font-semibold tracking-normal font-Monsertat text-black mb-1 p-1 rounded-xl bg-green-200 flex justify-center items-center"
      >
        Available
      </p>
      <button
        @click="toggleLike"
        class="text-xl bg-gray-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 w-10 h-10"
      >
        <i
          class="pi"
          :class="Plike ? 'pi-heart' : 'pi-heart-fill text-blue-500'"
        ></i>
      </button>
    </div>
    <div>
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl font-bold mb-1.5 lg:text-[1.3rem]">
          {{ product.name }}
        </h1>
        <p class="font-[600] text-base mr-3 lg:mr-5 tracking-wider">
          ${{ product.price }}
        </p>
      </div>
      <p class="text-base text-gray-700 font-light tracking-wider">
        {{ product.description }}
      </p>
    </div>

    <div class="flex flex-row justify-between items-center pr-3">
      <RouterLink
        to="/saved"
        class="cursor-pointer text-black tracking-wider bg-slate-100 rounded-md text-base font-medium w-18 hover:bg-slate-200 h-8 p-1 flex items-center justify-center"
      >
        Save
      </RouterLink>
      <RouterLink
        to="/product-cart"
        class="cursor-pointer text-white tracking-wider bg-blue-700 rounded-md text-base font-medium w-22 hover:bg-blue-800 h-10 p-1 flex items-center justify-center"
      >
        Purchase
      </RouterLink>
    </div>
  </div>
</template>
