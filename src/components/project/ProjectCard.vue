<template>
  <div
    class="w-full max-w-lg border-2 rounded-md shadow-xl py-3 px-2 flex flex-col md:flex-row md:px-4 md:items-center justify-center"
  >
    <div class="mb-4">
      <h3 class="font-semibold text-white text-lg mb-2 capitalize">
        {{ project.title }}
      </h3>
      <p class="text-sm">{{ project.description }}</p>
      <div class="flex gap-2 mt-2 flex-wrap">
        <span
          v-for="tool in project.tools"
          :key="tool"
          class="bg-dark-blue rounded-md px-2 flex items-center justify-center capitalize font-semibold"
          >{{ tool }}</span
        >
      </div>
    </div>
    <div class="flex gap-4 md:items-center md:flex-col">
      <a
        class="bg-primary p-1 rounded-full text-xl flex items-center justify-center shadow-lg md:hover:-translate-y-1 ease-in transition-all"
        :href="project.github"
        target="_blank"
        ><IconGithub />
        <span class="sr-only">github</span>
      </a>
      <a
        class="bg-primary p-1 rounded-full text-xl flex items-center justify-center shadow-lg md:hover:-translate-y-1 ease-in transition-all"
        :href="project.live"
        target="_blank"
        ><IconW3 />
        <span class="sr-only">live website</span>
      </a>
    </div>
  </div>
</template>

<script>
import IconGithub from "../icons/IconGithub.vue";
import IconW3 from "../icons/IconW3.vue";
export default {
  props: {
    project: Object,
  },
  components: { IconGithub, IconW3 },
};
</script>
