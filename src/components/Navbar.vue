<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";

let navOpen = ref(false);

const toggleNavOpen = computed(() => {
  if (!navOpen.value) {
    navOpen.value = true;
  } else if (navOpen.value) {
    navOpen.value = false;
  }
});

let Links = [
  { name: "Courses", to: "/#courses" },
  { name: "About", to: "/#about" },
  { name: "Services", to: "/#services" },
  { name: "Contact", to: "/#contact" },
];
</script>
<template>
  <nav
    class="bg-white/20 fixed w-full z-20 top-0 start-0 shadow-md backdrop-blur-md"
    data-aos="fade-down"
    data-aos-duration="1000"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink to="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="../../public/logo.png"
          class="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
          alt=""
        />
      </RouterLink>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <RouterLink
          to="/login"
          class="text-black hidden tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-4 py-3 text-center mr-3 cursor-pointer md:flex lg:flex hover:shadow-xl"
        >
          Login
        </RouterLink>
        <RouterLink
          to="signup"
          class="text-white tracking-widest bg-blue-500 hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get Started
        </RouterLink>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="toggleNavOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
        :class="navOpen ? 'flex' : 'hidden'"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li v-for="link in Links" :key="link.to">
            <a
              @click="toggleNavOpen"
              :href="link.to"
              class="block py-2 px-3 text-black rounded-sm hover:text-blue-500 md:p-0"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--  <nav
    class="bg-white/20 fixed w-full z-20 top-0 start-0 shadow-md backdrop-blur-md hidden"
    data-aos="fade-down"
    data-aos-duration="1000"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink to="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="../../public/logo.png"
          class="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
          alt=""
        />
      </RouterLink>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <RouterLink
          to="/login"
          class="text-black tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-4 py-3 text-center mr-3 cursor-pointer hover:shadow-xl"
        >
          Login
        </RouterLink>
        <RouterLink
          to="signup"
          class="text-white tracking-widest bg-blue-500 hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </RouterLink>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-row p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse"
        >
          <li v-for="link in Links" :key="link.to">
            <a
              :href="link.to"
              class="block py-2 px-3 text-black rounded-sm hover:text-blue-500 md:p-0"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>
