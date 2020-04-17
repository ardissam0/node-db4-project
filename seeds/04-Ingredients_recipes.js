
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredient_recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredient_recipes').insert([
        {RecipeId:1, IngredientId:1},
        {RecipeId:1, IngredientId:2},
        {RecipeId:1, IngredientId:3},
        {RecipeId:2, IngredientId:2},
        {RecipeId:2, IngredientId:3},
        {RecipeId:3, IngredientId:2},
        {RecipeId:3, IngredientId:4},
        {RecipeId:4, IngredientId:1},
        {RecipeId:4, IngredientId:2},
        {RecipeId:4, IngredientId:3},
        {RecipeId:5, IngredientId:2},
        {RecipeId:5, IngredientId:3},
        {RecipeId:5, IngredientId:2},
        {RecipeId:6, IngredientId:4},
      ]);
    });
};
