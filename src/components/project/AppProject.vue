<template>
  <section class="mt-6">
    <h2
      class="font-secondary capitalize text-xl font-semibold inline-block py-1 pl-1 pr-10 text-start bg-dark-blue text-primary"
    >
      Projects
    </h2>

    <div
      class="flex gap-2 gap-y-4 flex-wrap mt-4 w-full max-w-xl lg:px-16 px-4 md:px-8 md:container mx-auto"
    >
      <ProjectCard
        v-for="project in ProjectList"
        :key="project.github"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";
export default {
  setup() {
    const ProjectList = ref([
      {
        title: "Free Anime Planet",
        github: "https://github.com/ndace-hash/planet-anime",
        live: "https://freeanimeplanet.netlify.app",
        description:
          "This is a website I created solve the problems of ads when trying to download new episodes of my favorite anime series.",
        tools: ["vue", "express", "tailwind css", "restAPI"],
      },
      {
        title: "The Movie Store",
        github: "https://github.com/ndace-hash/the_movie_store",
        live: "https://themoviestore.netlify.app",
        description:
          "I built this website as a side project to practice my understanding of APIs. It allows you see popular movies and search for movies tou want to learn about before watching.",
        tools: ["HTML", "CSS", "JavaScript", "bootstrap", "TMDB API"],
      },
      {
        title: "codeden",
        github: "https://github.com/kromate/codeden",
        live: "https://codeden.netlify.app",
        description:
          "Codeden is an Open-source component library that provides basic components for developers to add to their apps. Codeden also has a website builder implemented in it.I worked on the user interface of the website.",
        tools: ["vue", "tailwind css", "icon8"],
      },
      {
        title: "Job Listing Board",
        github: "https://github.com/ndace-hash/job-listing-board",
        live: "https://ndace-hash.github.io/job-listing-board",
        description:
          "This is a frontend mentor challenge I completed. It list jobs openings and you can filter jobs based on positions and tech stacks.",
        tools: ["HTML", "CSS", "JavaScript"],
      },
    ]);

    return { ProjectList };
  },
  components: { ProjectCard },
};
</script>
