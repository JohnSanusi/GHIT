<script setup>
import { defineProps, computed } from "vue";
import { useMainStore } from "../stores/store";

const props = defineProps({
  product: Object,
});

const store = useMainStore();
function toggle() {
  store.toggleLike(props.product.id);
}

const addProductToCart = (product) => {
  store.addProduct(product);
};

const toast = useToast();

const productAdded = () => {
  toast.success("product added to cart");
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
        @click="toggle"
        class="text-xl bg-gray-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 w-10 h-10"
      >
        <i
          class="pi"
          :class="
            store.likes[product.id] ? 'pi-heart-fill text-blue-500' : 'pi-heart'
          "
        ></i>
      </button>
    </div>
    <div>
      <div class="flex justify-between items-baseline">
        <h1 class="text-xl font-bold mb-1.5 lg:text-[1.3rem]">
          {{ product.name }}
        </h1>
      </div>
      <p class="text-base text-gray-700 font-light tracking-wider">
        {{ product.description }}
      </p>
    </div>

    <div class="flex flex-row justify-between items-center pr-3">
      <p class="font-semibold text-lg mr-3 tracking-wider">
        ${{ product.price }}
      </p>
      <button
        @click="
          addProductToCart(product);
          productAdded();
        "
        class="cursor-pointer text-white tracking-wider bg-blue-700 rounded-md text-base font-medium w-22 hover:bg-blue-800 h-10 p-1 flex items-center justify-center"
      >
        Purchase
      </button>
    </div>
  </div>
</template>
