
exports.up = knex => knex.schema.createTable('livro_autor', table => {
    table.integer('livro_id').notNullable().references('livro.id')
    table.integer('autor_id').notNullable().references('autor.id')

});

exports.down = knex => knex.schema.dropTable('livro_autor');
