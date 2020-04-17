
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {Ingredient_name: 'curry'},
        {Ingredient_name: 'coconut milk'},
        {Ingredient_name: 'chicken'},
        {Ingredient_name: 'noodles'},
      ]);
    });
};
