
exports.up = function(knex, Promise) {
  return knex.schema.createTable('liked', tbl => {
      tbl.increments()
      tbl.boolean('liked').defaultTo(false)
      tbl.boolean('disliked').defaultTo(false)
      tbl.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      tbl.integer('joke_id')
      .unsigned()
      .references('id')
      .inTable('jokes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('liked')
};
