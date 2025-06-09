<script setup>
useSeoMeta({
  title: "GHIT",

  description:
    "GHIt is a hands-on texh school in Nigeria offering training in coding,robotics, solar panel engineering, graphics design and more",
  keywords:
    "GHIT, tech school Nigeria, coding school, robotics, solar engineering, graphics desogn, tech education, Nigeria tech hub",
  author: "GHIT Nigeria",
  robots: "index,follow",
});
</script>

<template>
  <header>
    <Navbar />
    <Hero />
  </header>
  <div>
    <BackToTop />
  </div>
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
