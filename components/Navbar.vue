<script setup>
import { ref, computed } from "vue";
import { useMainStore } from "../stores/store";
import { useToast } from "vue-toastification";

const store = useMainStore();
const toast = useToast();

let navOpen = ref(false);

const toggleNavOpen = computed(() => {
  if (!navOpen.value) {
    navOpen.value = true;
  } else if (navOpen.value) {
    navOpen.value = false;
  }
});

const count = computed(() => store.allItemsCount);

let Links = [
  { name: "Courses", to: "/#courses" },
  { name: "About", to: "/#about" },
  { name: "Services", to: "/#services" },
  { name: "Contact", to: "/#contact" },
];

const showDialog = ref(false);

const HandlelogOut = () => {
  showDialog.value = true;
};
const logOut = () => {
  store.logOut();
  toast.success("Account logged Out");
  showDialog.value = false;
};

const cancelLogOut = () => {
  showDialog.value = false;
};
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
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="/logo.png"
          class="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22"
          alt=""
        />
      </NuxtLink>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <NuxtLink
          to="/cart"
          class="relative flex justify-center items-center text-gray-form mr-4"
        >
          <svg
            class="mx-auto h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
            />
          </svg>

          <span
            class="absolute top-0 right-0 flex justify-center items-center bg-gray-400 text-white text-base font-bold cursor-pointer rounded-full w-5 h-5"
            >{{ count }}
          </span>
        </NuxtLink>
        <NuxtLink
          to="/login"
          v-if="!store.currentUser"
          class="text-white hidden tracking-widest bg-blue-400 hover:bg-blue-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 md:flex lg:flex font-medium rounded-lg text-sm px-4 py-3 mr-3 text-center"
        >
          Login
        </NuxtLink>
        <NuxtLink
          v-if="!store.currentUser"
          to="/signup"
          class="text-white hidden tracking-widest bg-blue-500 hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 md:flex lg:flex font-medium rounded-lg text-sm px-4 py-3 text-center"
        >
          Get Started
        </NuxtLink>
        <button
          v-if="store.currentUser"
          @click="HandlelogOut"
          class="text-white hidden tracking-widest bg-red-500 hover:bg-red-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-red-300 md:flex lg:flex font-medium rounded-lg text-sm px-4 py-3 text-center"
        >
          LogOut
        </button>
        <button
          v-if="store.currentUser"
          @click="HandlelogOut"
          class="text-white bg-red-500 p-3 flex tracking-widest cursor-pointer md:hidden lg:hidden font-medium rounded-lg text-lg text-center"
        >
          <i class="pi pi-sign-out"></i>
        </button>

        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 outline-none ring-2 ring-gray-600"
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

  <div
    v-if="showDialog"
    class="flex justify-center items-center bg-black/20 fixed top-0 left-0 min-w-full min-h-full z-10"
  >
    <div
      class="bg-white shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[30%] h-35 p-3 flex flex-col justify-between"
    >
      <div>
        <h1 class="text-xl font-semibold tracking-wide mb-2">Are Your Sure?</h1>
      </div>

      <div class="flex flex-row gap-3 justify-end">
        <button
          @click="cancelLogOut"
          class="text-black flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:shadow-xl"
        >
          Cancel
        </button>
        <button
          @click="logOut"
          class="text-white bg-red-500 flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:bg-red-400"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>
