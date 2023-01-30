import axiosClient from "../axiosclient";
export function searchMeals({commit},keyword){
  axiosClient.get(`search.php?s=${keyword}`)
             .then(({ data  }) => {
              commit('setSearchedMeals', data.meals)
            })
}

export function searchMealsByLetter({commit}, letter) {
  axiosClient.get(`search.php?f=${letter}`)
             .then(({data}) => {
              commit('setMealsByLetter', data.meals)
            })
}

export function searchMealsByIngredient({commit}, keyword) {
  axiosClient.get(`filter.php?i=${keyword}`)
             .then(({data}) => {
              commit('setMealsByIngredient', data.meals)
            })
}
