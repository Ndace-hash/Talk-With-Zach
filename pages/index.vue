<template>
  <section class="w-full pt-4 overflow-auto">
    <Hero />
    <Project />
  </section>
</template>

<script>
import Default from "../layouts/default.vue";
import Hero from "~/components/home/hero.vue";
import Project from "~/components/home/project.vue";
export default {
  name: "IndexPage",
  components: { Default, Hero, Project },
};
</script>
