
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokes', tbl => {
      tbl.increments()
      tbl.string('author', 100).notNullable()
      tbl.string('joke', 5000).notNullable()
      tbl.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('SET NULL')
      //There is also RESTRICT 
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('jokes')
};
