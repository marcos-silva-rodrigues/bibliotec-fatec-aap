
exports.up = knex => knex.schema.createTable('autor', table => {
    table.increments('id').unsigned()
    table.string('nome', 30).notNullable()
    table.string('sobrenome', 60).notNullable()
    table.string('restante_nome', 60).notNullable().defaultTo('')
});

exports.down = knex => knex.schema.dropTable('autor');

