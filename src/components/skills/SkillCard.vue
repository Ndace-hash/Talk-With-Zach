<template>
  <div
    class="py-1 px-2 text-center border-2 shadow-md inline-block rounded-md mx-1"
  >
    {{ skill }}
  </div>
</template>

<script>
export default {
  props: {
    skill: String,
  },
};
</script>
