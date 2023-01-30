<template>
  <header class="bg-orange-600 h-16 shadow-sm">
    <div class="flex justify-between items-stretch container max-w-4xl mx-auto h-full">
      <router-link
        :to="{ name: 'home' }"
        class="text-gray-100 transition-colors inline-flex h-full capitalize items-center hover:bg-orange-200 hover:text-orange-800 px-2"
        ><span class="material-symbols-outlined"> home </span></router-link
      >
      <div class="flex items-center gap-5">
        <router-link
          :to="{ name: 'byName' }"
          class="gap-1 text-gray-100 text-sm md:text-xl transition-colors inline-flex h-full capitalize items-center hover:bg-orange-200 hover:text-orange-800 px-2"
        >
          <span class="material-symbols-outlined"> cooking </span>
          Search Meals</router-link
        >
        <router-link
          :to="{ name: 'byLetter' }"
          class="text-sm md:text-xl gap-1 text-gray-100 transition-colors inline-flex h-full capitalize items-center hover:bg-orange-200 hover:text-orange-800 px-2"
        >
          <span class="material-symbols-outlined"> sort_by_alpha </span> Meals by
          Letter</router-link
        >
        <router-link
          :to="{ name: 'ingredients' }"
          class="text-sm md:text-xl gap-1 text-gray-100 transition-colors inline-flex h-full capitalize items-center hover:bg-orange-200 hover:text-orange-800 px-2"
          ><span class="material-symbols-outlined"> menu_book </span> Meals by
          Ingredients</router-link
        >
      </div>
    </div>
  </header>
</template>
