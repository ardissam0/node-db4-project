
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Recipe_name:"recipe-1", description:"The best recipe ever!"},
        {Recipe_name:"recipe-2"},
        {Recipe_name:"recipe-3"},
        {Recipe_name:"recipe-4"},
        {Recipe_name:"recipe-5"},
      ]);
    });
};
