<template>
  <div class="-mx-4 flex flex-wrap pb-10 lg:pb-10">
    <mealItem v-for="meal in meals" :key="meal" :meal="meal" />
  </div>
  <div
    v-if="!meals.length"
    class="flex items-center text-2xl text-gray-400 justify-center"
  >
    There is no meals
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
