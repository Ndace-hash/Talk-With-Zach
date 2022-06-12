<template>
  <main class="flex overflow-hidden h-screen">
    <Navbar />
    <Nuxt />
  </main>
</template>

<script>
import Navbar from "@/components/core/Navbar.vue";
export default {
  name: "Default",
  components: {
    Navbar,
  },
};
</script>
