<template>
  <div class="container max-w-4xl mx-auto mt-10">
    <div class="flex flex-wrap gap-5 justify-center mb-10">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="text-2xl font-medium text-gray-600 hover:text-orange-600"
      >
        {{ letter }}</router-link
      >
    </div>
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
