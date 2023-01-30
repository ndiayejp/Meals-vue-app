<template>
  <div class="w-full px-4 md:w-1/2 xl:w-1/3">
    <div class="mb-10 overflow-hidden rounded-lg bg-white shadow-md">
      <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-full h-48 object-cover hover:brightness-125 hover:scale-125 transition"
      /></router-link>
      <div class="p-4 text-center sm:p-5 md:p-3 xl:p-5">
        <h3>
          <router-link
            :to="{ name: 'mealDetail', params: { id: meal.idMeal } }"
            class="text-gray-700 hover:text-lime-800 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {{ meal.strMeal }}
          </router-link>
        </h3>
        <p
          class="text-gray-600 mb-7 text-base leading-relaxed"
          v-if="meal.strInstructions"
        >
          {{ $filters.truncateWords(meal.strInstructions, 10) }}...
        </p>
        <YoutubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
