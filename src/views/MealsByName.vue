<template>
  <div class="container max-w-4xl mx-auto mt-10">
    <div class="relative">
      <input
        placeholder="Search for meals..."
        type="text"
        v-model="keyword"
        @change="searchMeals"
        class="text-2xl w-full border border-gray-200 shadow-sm rounded-lg py-4 focus:outline-none focus:ring-lime-800 focus:border-lime-800 placeholder-gray-400"
      />
      <span
        v-if="showCancel"
        @click="resetInput"
        class="transation cursor-pointer absolute top-5 right-2 text-gray-400 material-symbols-outlined"
      >
        cancel
      </span>
    </div>
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";
import store from "../store";
import Meals from "../components/Meals.vue";
const route = useRoute();
const keyword = ref("");
const showCancel = ref(false);
const meals = computed(() => store.state.searchedMeals);
const searchMeals = () => {
  showCancel.value = true;
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
};
const resetInput = () => {
  showCancel.value = false;
  keyword.value = "";
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
