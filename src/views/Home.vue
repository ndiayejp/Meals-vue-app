<template>
  <div class="container max-w-4xl mx-auto mt-10">
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosclient";
import Meals from "../components/Meals.vue";
const meals = ref([]);
onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    axiosClient.get("random.php").then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }
});
</script>
