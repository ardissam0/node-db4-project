
exports.up = function(knex) {
    return knex.schema.createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 256).unique()
        .notNullable()
        .index()
    })
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name").notNullable().unique().index()
        tbl.float("quantity").notNullable();
        tbl.integer("recipe_id")
              .notNullable()
              .references("id")
              .inTable("recipes")
              .onDelete("RESTRICT")
              .onUpdate("CASCADE")
    })
    .createTable("steps", tbl => {
        tbl.increments()
        tbl.integer("step_number").notNullable()
        tbl.text("instructions").notNullable()
        tbl.integer("recipe_id")
              .notNullable()
              .references("id")
              .intable("recipes")
              .onUpdate("CASCADE")
              .onDelete("CASCADE")
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
