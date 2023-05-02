<script setup>
import AppHero from "./components/AppHero.vue";
import AppSkills from "./components/skills/AppSkills.vue";
import AppProject from "./components/project/AppProject.vue";
import DefaultLayout from "./layout/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <div class="mb-6">
      <AppHero />
      <AppSkills />
      <AppProject />
    </div>
  </DefaultLayout>
</template>
