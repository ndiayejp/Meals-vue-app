<template>
  <a
    :href="href"
    target="_blank"
    class="items-center text-gray-600 hover:border-lime-800 hover:bg-lime-800 hover:text-white inline-flex gap-2 rounded-full border border-gray-300 py-2 px-7 text-base font-medium transition"
  >
    <slot><span class="material-symbols-outlined"> play_circle </span> Youtube </slot>
  </a>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
