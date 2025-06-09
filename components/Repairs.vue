<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  number: "",
  issue: "",
  description: "",
});

const toast = inject("toast");

const handleSubmit = () => {
  const description = {
    name: form.name,
    email: form.email,
    number: form.number,
    issue: form.issue,
    description: form.description,
  };

  if (
    description.name === "" ||
    description.email === "" ||
    description.number === "" ||
    description.issue === "" ||
    description.description === ""
  ) {
    toast.warning("Please Fill in all Inputs");
  } else {
    toast.success("Message delivered, we would get back to you ");

    form.name = "";
    form.email = "";
    form.number = "";
    form.issue = "";
    form.description = "";
  }
};
</script>
<template>
  <section id="contact" class="flex flex-col gap-4 p-8 mt-12">
    <div
      class="flex justify-center items-center flex-col"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 class="font-bold text-3xl md:text-5xl lg:6xl">Let us Know</h1>
      <p
        class="text-base text-gray-700 font-light text-center mt-1 font-sans lg:text-lg"
      >
        Describe your issues, let's know how we can help you
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
          v-model="form.number"
          type="text"
          inputmode="numeric"
          name="Phone Number"
          maxlength="11"
          id="Number"
          placeholder="Phone Number"
          class="border border-gray-[1.5px] p-4 rounded-lg font-light text-lg w-full mt-3"
        />
        <input
          v-model="form.issue"
          type="text"
          name="issue"
          id="issue"
          placeholder="issue"
          class="border border-gray-[1.5px] p-4 rounded-lg font-light text-lg w-full mt-3"
        />

        <textarea
          v-model="form.description"
          name="description"
          id="description"
          placeholder="description...."
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
  </section>
</template>
