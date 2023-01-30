<template>
  <div class="container max-w-4xl mx-auto mt-10">
    <input
      type="text"
      v-model="keyword"
      class="text-2xl placeholder-gray-400 rounded-lg border-2 bg-white border-gray-200 py-4 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    />
    <template v-for="ingredient in computedIngredients" :key="ingredient">
      <div class="inline-flex">
        <a
          @click="openIngredient(ingredient)"
          class="cursor-pointer flex items-center gap-3 shadow-md text-xl rounded-lg bg-transparent py-2 px-3 mx-2 my-2 border border-gray-300 hover:border-orange-600 hover:bg-orange-600 text-gray-700 hover:text-gray-100 transition-colors"
        >
          <img
            :src="`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`"
            style="with: 34px; height: 34px"
          />
          {{ ingredient.strIngredient }}
        </a>
      </div>
    </template>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import axiosClient from "../axiosclient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const meals = computed(() => store.state.mealsByIngredient);
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: {
      ingredient: ingredient.strIngredient,
    },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
