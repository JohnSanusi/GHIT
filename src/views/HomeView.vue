<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import HomeCourses from "@/components/Home-Courses.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
</script>

<template>
  <header>
    <Navbar />
    <Hero />
    <BackToTop />
  </header>
  <main>
    <HomeCourses />
    <About />
    <Services />
    <Contact />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
