<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const toast = inject("toast");

const handleSubmit = () => {
  const message = {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  };

  if (
    message.name === "" ||
    message.email === "" ||
    message.subject === "" ||
    message.message === ""
  ) {
    toast.warning("Please Fill in all Inputs");
  } else {
    toast.success("Message delivered, we would get back to you ");

    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  }
};
</script>
<template>
  <section id="contact" class="flex flex-col gap-4 p-8">
    <div
      class="flex justify-center items-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <button
        href="#"
        class="text-black rounded-2xl text-sm font-medium border-gray-300 border-[1.8px] w-30 h-7 p-1 flex justify-center items-center text-center"
      >
        Contact Us
      </button>
    </div>
    <div
      class="flex justify-center items-center flex-col"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 class="font-bold text-3xl md:text-5xl lg:6xl">Reach Out</h1>
      <p
        class="text-base text-gray-700 font-light text-center mt-1 font-sans lg:text-lg"
      >
        Feel free to reach out to us in the case of any questions
      </p>
    </div>
    <div
      class="flex justify-center items-center mt-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <form
        @submit.prevent="handleSubmit"
        class="w-full h-auto p2 md:w-full lg:w-[50%]"
      >
        <div
          class="flex flex-col gap-3 md:flex md:flex-xol lg:flex lg:flex-row"
        >
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            class="border border-gray-[1.5px] p-4 rounded-lg font-light text-lg w-full md:w-full lg:w-[50%]"
          />
          <input
            v-model="form.email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="border border-gray-[1.5px] p-4 rounded-lg font-light text-lg w-full md:w-full lg:w-[50%]"
          />
        </div>
        <input
          v-model="form.subject"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          class="border border-gray-[1.5px] p-4 rounded-lg font-light text-lg w-full mt-3"
        />
        <textarea
          v-model="form.message"
          name="message"
          id="message"
          placeholder="messsage...."
          cols="30"
          rows="5"
          class="border border-gray-[1.5px] p-4 rounded-lg font-light text-lg w-full mt-3"
        ></textarea>
        <button
          type="submit  "
          @click="successful"
          id="submit"
          class="text-white bg-blue-500 hover:bg-blue-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-lg px-3 py-2 text-center mt-1 w-[75%] md:w-[30%] lg:w-[30%] place-items-center"
        >
          Send your message
        </button>
      </form>
    </div>
    <div
      class="flex flex-col mt-4 gap-6 md:p-8 md:flex md:flex-row md:gap-4 lg:flex lg:gap-3 lg:p-[60px]"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.7834782111933!2d3.0934266768213594!3d6.4925360543697686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b78a8c235bc41%3A0x64ae5a2879d5ffee!2sBeulah%20Comprehensive%20High%20School%20Morogbo!5e0!3m2!1sen!2sng!4v1746455779523!5m2!1sen!2sng"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        height="350"
        class="w-full md:w-[60%] lg:w-[80%] rounded-xl"
        data-aos="fade-down"
        data-aos-duration="1000"
      ></iframe>

      <div
        class="flex flex-col justify-between w-full h-auto bg-[#f3f3f3] border-gray-[1.5px] rounded-xl md:w-[40%] lg:w-[30%]"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div class="flex flex-col gap-4 p-3">
          <div>
            <span class="font-light text-base">Address:</span>
            <p class="text-lg font-semibold">No 1 GHIT street morogbo, Lagos</p>
          </div>
          <div class="flex flex-col">
            <span class="font-light text-base">Email:</span>
            <a href="mailto:contact@ghit.com" class="text-xl font-semibold"
              >contact@ghit.com</a
            >
          </div>
          <div class="flex flex-col">
            <span class="font-light text-base">Phone:</span>
            <a href="tel:+234 801234780" class="text-xl font-semibold"
              >+234 801234780</a
            >
          </div>
        </div>
        <div class="flex flex-row justify-between p-2 gap-2">
          <a
            href="#"
            class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:shadow-md"
          >
            <i class="pi pi-whatsapp text-lg"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:shadow-md"
          >
            <i class="pi pi-facebook text-lg"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:shadow-md"
          >
            <i class="pi pi-twitter text-lg"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:shadow-md"
          >
            <i class="pi pi-instagram text-lg"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:shadow-md"
          >
            <i class="pi pi-youtube text-lg"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:shadow-md"
          >
            <i class="pi pi-github text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
