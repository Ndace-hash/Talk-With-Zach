<template>
  <div id="#projects">
    <h3 class="text-base font-semibold uppercase text-secondary px-2">
      projects
    </h3>
    <div class="p-4">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex shadow-lg m-1 gap-1 px-3 py-2"
      >
        <div class="img-wrapper w-1/2 rounded-md overflow-hidden">
          <img
            :src="require(`~/assets/images/${project.image}`)"
            :alt="project.name"
          />
        </div>
        <div class="p-2 relative">
          <h2 class="font-bold text-2xl capitalize text-secondary mb-1">
            {{ project.name }}
          </h2>
          <span class="text-sm opacity-70 mb-2">{{ project.role }}</span>
          <div class="flex gap-1 my-1">
            <span
              v-for="(tech, i) in project.technologies"
              :key="i"
              class="bg-secondary text-white text-xs rounded-lg px-2 py-1"
              >{{ tech }}</span
            >
          </div>
          <p class="font-semibold opacity-60 text-sm">
            {{ project.description }}
          </p>
          <div class="mt-auto absolute bottom-4 flex gap-4">
            <a
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border-1 shadow-lg hover:-translate-y-1 duration-300 ease-in"
              >github</a
            >
            <a
              :href="project.links.live"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border-1 shadow-lg hover:-translate-y-1 duration-300 ease-in"
              >live</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    const res = await fetch("http://localhost:3000/projects.json");
    const { projects } = await res.json();
    console.log(projects);
    this.projects = projects;
  },
};
</script>
