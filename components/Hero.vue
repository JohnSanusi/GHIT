<script setup></script>
<template>
  <section
    id="hero"
    class="mt-28 flex flex-col gap-4 lg:flex lg:flex-row lg:gap-x-5 w-full p-5"
  >
    <div class="w-full lg:w-[50%]">
      <button
        href="#"
        class="text-black rounded-2xl text-sm font-medium border-gray-300 border-[1.8px] w-50 h-7 p-1 flex justify-center items-center mb-2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Launch Your Tech Career
      </button>
      <h1
        class="font-sans font-bold text-3xl md:text-6xl lg:6xl"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Master Technology.
      </h1>
      <h1
        class="font-sans font-bold text-3xl md:text-6xl lg:6xl"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Build The Future.
      </h1>
      <p
        class="text-lg text-gray-700 font-light mt-1.5 font-sans"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        From coding to robotics, graphics design to solar engineering <br />
        our expert-led courses prepare you for the most in-demand <br />
        tech careers.
      </p>
      <div class="flex gap-3">
        <NuxtLink
          to="/courses"
          class="cursor-pointer text-white bg-blue-500 rounded-lg text-base font-semibold w-full md:w-50 lg:w-50 h-12 p-1 flex justify-center items-center mt-2 hover:shadow-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Explore Courses
          <i class="pi pi-arrow-right text-lg mx-1.5 mt-1"></i>
        </NuxtLink>
      </div>
    </div>
    <div class="w-full lg:w-[50%]" data-aos="fade-in" data-aos-duration="1000">
      <img
        src="/hero-bg.png"
        alt=""
        class="w-full h-[50%] md:h-[30%] lg:w-full lg:h-[70%] rounded-lg"
      />
    </div>
  </section>
</template>
