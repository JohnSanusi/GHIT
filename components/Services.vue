<script setup></script>
<template>
  <section
    id="services"
    class="flex flex-col gap-2 p-8 justify-center items-center bg-gray-50"
  >
    <div class="flex" data-aos="fade-down" data-aos-duration="1000">
      <button
        href="#"
        class="text-black rounded-2xl text-sm font-medium border-gray-300 border-[1.8px] w-30 h-7 p-1 flex justify-center items-center mb-2"
      >
        Our Services
      </button>
    </div>
    <div
      class="flex justify-center items-center flex-col"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 class="font-bold text-3xl md:text-5xl lg:6xl">What We Do</h1>
      <p
        class="text-base text-gray-700 font-light text-center mt-1.5 font-sans lg:text-lg"
      >
        Here is a list of other programs and services run by us
      </p>
    </div>
    <div
      class="flex flex-col gap-5 md:flex md:flex-row md:flex-wrap lg:flex lg:flex-row lg:gap-5"
    >
      <div
        class="flex flex-col gap-1 justify-center items-center w-full h-50 bg-white rounded-lg p-4 md:w-[48%] lg:w-[32%] lg:h-70 hover:shadow-xl"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <span
          class="bg-white rounded-[100%] w-15 h-15 flex justify-center items-center lg:w-20 lg:h-20"
        >
          <i class="pi pi-box text-3xl"></i>
        </span>
        <h1 class="font-bold text-xl md:text-3xl lg:4xl">Products</h1>
        <p class="text-base text-gray-700 font-light text-center lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          laudantium nisi
        </p>
        <NuxtLink
          to="/products"
          class="text-white bg-blue-500 hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-1 w-[40%]"
        >
          Visit <i class="pi pi-angle-right text-lg"></i>
        </NuxtLink>
      </div>
      <div
        class="flex flex-col gap-1 justify-center items-center w-full h-50 bg-white rounded-lg p-4 md:w-[48%] lg:w-[32%] lg:h-70 hover:shadow-xl"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <span
          class="bg-white rounded-[100%] w-15 h-15 flex justify-center items-center lg:w-20 lg:h-20"
        >
          <i class="pi pi-sun text-3xl"></i>
        </span>
        <h1 class="font-bold text-xl md:text-3xl lg:4xl">Solar Solutions</h1>
        <p
          class="text-base text-gray-700 font-light font-sans text-center lg:text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          laudantium nisi
        </p>
        <NuxtLink
          to="/"
          class="text-white bg-blue-500 hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-1 w-[40%]"
        >
          Visit <i class="pi pi-angle-right text-lg"></i>
        </NuxtLink>
      </div>
      <div
        class="flex flex-col gap-1 justify-center items-center w-full h-50 bg-white rounded-lg p-4 md:w-[48%] lg:w-[32%] lg:h-70 hover:shadow-xl"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <span
          class="bg-white rounded-[100%] w-15 h-15 flex justify-center items-center lg:w-20 lg:h-20"
        >
          <i class="pi pi-wrench text-3xl"></i>
        </span>
        <h1 class="font-bold text-xl md:text-3xl lg:4xl">Repairs</h1>
        <p
          class="text-base text-gray-700 font-light font-sans text-center lg:text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          laudantium nisi
        </p>
        <NuxtLink
          to="/repairs"
          class="text-white bg-blue-500 hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-1 w-[40%]"
        >
          Visit <i class="pi pi-angle-right text-lg"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
