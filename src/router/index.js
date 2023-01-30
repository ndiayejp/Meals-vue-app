import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import Ingredients from '../views/Ingredients.vue'
import MealsDetail from '../views/MealsDetail.vue'
const routes = [
  {
    path: '/',
    name: 'defaultlayout',
    component: DefaultLayout,
    children:[
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/meal/:id?',
        name: 'mealDetail',
        component: MealsDetail
      },
      {
        path: '/letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: '/ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredients
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
