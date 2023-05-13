<template>
  <div class="max-w-[1024px] mx-auto md:flex relative">
    <header
      class="flex justify-between py-2 border-b-2 border-dark-blue px-4 md:hidden"
    >
      <AppLogo class="scale-75" />
      <nav class="flex md:flex-col items-center justify-center gap-3">
        <li
          class="list-none cursor-pointer bg-primary p-1 rounded-full text-lg"
        >
          <a href="https://github.com/ndace-hash" target="_blank"
            ><IconGithub
          /></a>
        </li>
        <li
          class="list-none cursor-pointer bg-primary p-1 rounded-full text-lg"
        >
          <a href="https://twitter.com/ZaccheausYisa_N" target="_blank"
            ><IconTwitter
          /></a>
        </li>
        <li
          class="list-none cursor-pointer bg-primary p-1 rounded-full text-lg"
        >
          <a href="https://wa.me/2349097405025" target="_blank"
            ><IconWhatsapp
          /></a>
        </li>
      </nav>
    </header>
    <aside
      class="hidden flex-col md:flex border-r-2 border-l-2 border-dark-blue w-[60px] items-center justify-between h-screen py-4 fixed top-0 left-auto"
    >
      <AppLogo />
      <nav class="flex md:flex-col items-center justify-center gap-3">
        <li
          class="list-none cursor-pointer bg-primary p-1 rounded-full text-lg hover:bounce"
        >
          <a href="https://github.com/ndace-hash" target="_blank"
            ><IconGithub
          /></a>
        </li>
        <li
          class="list-none cursor-pointer bg-primary p-1 rounded-full text-lg hover:bounce"
        >
          <a href="https://twitter.com/ZaccheausYisa_N" target="_blank"
            ><IconTwitter
          /></a>
        </li>
        <li
          class="list-none cursor-pointer bg-primary p-1 rounded-full text-lg hover:bounce"
        >
          <a href="https://wa.me/2349097405025" target="_blank"
            ><IconWhatsapp
          /></a>
        </li>
      </nav>
    </aside>
    <div class="md:ml-[60px]">
      <slot />
      <footer class="text-base text-center">
        <p>
          made with
          <a href="https://vuejs.org" target="_blank"><span>Vue</span></a> and
          <a href="https://tailwindcss.com" target="_blank"
            ><span>Tailwind CSS</span></a
          >. Icons from
          <a href="https://icones.netlify.app" target="_blank"
            ><span>Icones</span></a
          >. Deploy and hosted on
          <a href="https://netlify.com" target="_blank"
            ><span>Netlify.</span></a
          >
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import AppLogo from "../components/AppLogo.vue";
import IconGithub from "../components/icons/IconGithub.vue";
import IconTwitter from "../components/icons/IconTwitter.vue";
import IconWhatsapp from "../components/icons/IconWhatsapp.vue";
export default {
  components: { IconGithub, IconTwitter, IconWhatsapp, AppLogo },
};
</script>

<style scoped>
footer a {
  @apply text-primary font-semibold;
}
</style>
