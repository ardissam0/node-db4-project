
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {Instructions:"boil hot water",stepNumber:"1",RecipeID:"1"},
        {Instructions:"throw in curry, seasoning",stepNumber:"2",RecipeID:"1"},
        {Instructions:"mix in milk, chicken",stepNumber:"3",RecipeID:"1"},
        {Instructions:"cook for an hour or so",stepNumber:"1",RecipeID:"2"},
        {Instructions:"mix thouroughly",stepNumber:"1",RecipeID:"3"},
        {Instructions:"taste, add salt",stepNumber:"2",RecipeID:"3"},
        {Instructions:"make sure to cover",stepNumber:"3",RecipeID:"4"},
        {Instructions:"boil noodles for 10 minutes",stepNumber:"1",RecipeID:"2"},
      ]);
    });
};
