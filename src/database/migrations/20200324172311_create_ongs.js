
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
  .createTable('casos', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('ongs_id').notNullable();

    table.foreign('ongs_id').references('id').inTable('ongs');
  });
};
/**
 * 'npx knex migrate:latest' para rodar essas configurações
 */
exports.down = function(knex) {
  return knex.schema.dropTable('casos').dropTable('ongs');
};
