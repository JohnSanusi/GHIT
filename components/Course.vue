<script setup>
import { defineProps, ref, onMounted, watch } from "vue";
import { useMainStore } from "../stores/store";
import { useToast } from "vue-toastification";

const props = defineProps({
  course: Object,
});
const store = useMainStore();

const addCourseToCart = (course) => {
  store.addCourse(course);
};

const toast = useToast();

const addedCourse = () => {
  toast.success("courses added to cart");
};

function toggle() {
  store.toggleLike(props.course.id);
}
</script>
<template>
  <div
    class="flex flex-col justify-between gap-1 w-full h-auto shadow-lg md:w-[48%] lg:w-[32%] p-3 rounded-lg"
    data-aos="fade-in"
    data-aos-duration="1000"
  >
    <div class="flex justify-between items-baseline">
      <p
        class="text-sm font-semibold tracking-wider font-Monsertat text-gray-500 mb-1 p-1.5 rounded-2xl flex justify-center items-center"
      >
        <i class="pi pi-desktop text-sm mr-1"> </i>{{ course.duration }}
      </p>
      <button
        @click="toggle"
        class="text-xl bg-gray-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100 w-10 h-10"
      >
        <i
          class="pi"
          :class="
            store.likes[course.id] ? 'pi-heart-fill text-blue-500' : 'pi-heart'
          "
        ></i>
      </button>
    </div>
    <div>
      <div class="flex justify-between items-center tracking-wider">
        <h1 class="text-xl font-bold mb-1.5 lg:text-[1.3rem] font-[Arial]">
          {{ course.name }}
        </h1>
      </div>
      <p class="text-base text-gray-700 font-light tracking-wide">
        {{ course.stack }}
      </p>
    </div>
    <div>
      <p class="ext-sm text-gray-700 font-light tracking-wider">
        <i class="pi pi-users text-sm 5"> </i> Beginner to advanced
      </p>
    </div>
    <div class="flex flex-row justify-between items-center pr-3 mt-2">
      <p class="font-semibold text-lg mr-1 lg:mr-5 tracking-wider">
        ${{ course.price }}
      </p>
      <button
        @click="
          addCourseToCart(course);
          addedCourse();
        "
        class="cursor-pointer tracking-widest text-white bg-blue-700 rounded-md text-base font-medium w-22 hover:bg-blue-800 h-10 p-1 flex items-center justify-center"
      >
        Register
      </button>
    </div>
  </div>
</template>
