<template>
  <section
    class="flex flex-col bg-primary h-screen z-10 w-1/5 justify-between p-2"
  >
    <div>
      <div class="logo py-4 px-2">
        <Nuxt-Link to="/">
          <h2 class="text-lg font-bold text-action">ZaccheausYisa.</h2>
        </Nuxt-Link>
      </div>
      <nav class="px-2">
        <li
          class="list-none hover:bg-action hover:bg-opacity-10 rounded-md hover:cursor-pointer w-max py-1 px-2 my-5"
        >
          <Nuxt-Link
            to="#projects"
            class="text-white opacity-70 uppercase font-normal text-xs"
            >Projects</Nuxt-Link
          >
        </li>
        <li
          class="list-none hover:bg-action hover:bg-opacity-10 rounded-md hover:cursor-pointer w-max py-1 px-2 my-5"
        >
          <Nuxt-Link
            to="/"
            class="text-white opacity-70 uppercase font-normal text-xs"
            >Skills</Nuxt-Link
          >
        </li>
        <li
          class="list-none hover:bg-action hover:bg-opacity-10 rounded-md hover:cursor-pointer w-max py-1 px-2 my-5"
        >
          <Nuxt-Link
            to="/"
            class="text-white opacity-70 uppercase font-normal text-xs"
            >About</Nuxt-Link
          >
        </li>
        <li
          class="list-none hover:bg-action hover:bg-opacity-10 rounded-md hover:cursor-pointer w-max py-1 px-2 my-5"
        >
          <Nuxt-Link
            to="/"
            class="text-white opacity-70 uppercase font-normal text-xs"
            >Contact</Nuxt-Link
          >
        </li>
      </nav>
    </div>
    <div class="flex flex-col px-2">
      <a href="/" target="_blank" class="text-white opacity-70 text-sm"
        >Linkedin</a
      >
      <a href="/" target="_blank" class="text-white opacity-70 text-sm"
        >Github</a
      >
      <a href="/" target="_blank" class="text-white opacity-70 text-sm"
        >Twitter</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
