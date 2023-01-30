<template>
  <div class="container max-w-4xl mx-auto mt-5">
    <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
        <img
          alt="Les Paul"
          :src="meal.strMealThumb"
          class="object-cover w-full aspect-square rounded-xl"
        />
        <div class="flex items-center justify-between gap-3">
          <span class="font-bold">
            Catégorie
            <dt class="font-medium">{{ meal.strCategory }}</dt>
          </span>
          <span class="font-bold"
            >Tags
            <dt class="font-medium">{{ meal.strTags }}</dt>
          </span>
          <span class="font-bold"
            >Culture
            <dt class="font-medium">{{ meal.strArea }}</dt>
          </span>
        </div>
        <span class="text-sm font-bold">
          <a :href="meal.strSource" target="_blank">{{ meal.strSource }}</a></span
        >
      </div>
      <div class="sticky top-0">
        <div class="flex justify-between">
          <div class="max-w-[35ch]">
            <h1 class="text-2xl font-bold text-lime-800">{{ meal.strMeal }}</h1>
          </div>
        </div>
        <details class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
          <summary class="block">
            <div>
              <div class="prose max-w-none">
                <p class="text-gray-700 text-justify">{{ meal.strInstructions }}</p>
              </div>
            </div>
          </summary>
        </details>
        <h2 class="text-2xl text-lime-800 mt-5 mb-5 font-bold">Ingredients</h2>
        <ul class="flex flex-wrap gap-4">
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li
              v-if="meal[`strIngredient${ind + 1}`]"
              class="text-gray-600 bg-gray-300 px-3 py-2 rounded-lg"
            >
              ({{ ind + 1 }}).{{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
        <h2 class="text-2xl text-lime-800 mt-5 mb-5 font-bold">Measure</h2>
        <ul class="flex flex-wrap gap-4 mb-5">
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li
              v-if="meal[`strMeasure${index + 1}`]"
              class="text-gray-600 bg-gray-300 px-3 py-2 rounded-lg"
            >
              ({{ index + 1 }}).{{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axiosclient";
import { useRoute } from "vue-router";
const route = useRoute();
const meal = ref({});
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0];
  });
});
</script>
