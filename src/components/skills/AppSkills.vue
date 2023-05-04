<template>
  <section class="mt-4">
    <h2
      class="font-secondary capitalize text-xl font-semibold inline-block py-1 pl-1 pr-10 text-start bg-dark-blue text-primary"
    >
      Tools & languages
    </h2>

    <div
      class="flex gap-2 gap-y-4 flex-wrap mt-4 w-full max-w-xl lg:px-16 px-4 md:px-8 md:container mx-auto"
    >
      <SkillCard v-for="skill in skills" :skill="skill" :key="skill" />
    </div>
  </section>
</template>

<script>
import SkillCard from "./SkillCard.vue";
import { ref } from "vue";
export default {
  setup() {
    const skills = ref([
      "JavaScript",
      "Vue JS",
      "Node JS",
      "Tailwind CSS",
      "CSS",
      "HTML",
      "SCSS",
      "Git",
      "pinia/vuex",
      "Java",
    ]);

    return { skills };
  },
  components: { SkillCard },
};
</script>
