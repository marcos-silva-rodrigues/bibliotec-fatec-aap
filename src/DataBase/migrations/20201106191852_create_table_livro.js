
exports.up = knex => knex.schema.createTable('livro', table => {
    table.increments('id').unsigned()
    table.string('titulo', 100).notNullable()
    table.string('subtitulo').defaultTo('')
    table.text('imagens').notNullable()
    table.text('sobre').defaultTo('')
    table.integer('ano_publicacao').notNullable()
    table.string('editora' ,50).notNullable()
    table.integer('edicao').notNullable().defaultTo(1)
    table.integer('paginas').notNullable()
    table.integer('disponivel').notNullable().defaultTo(5)
    // relacionamento
    table.integer('categoria_id')
        .references('categoria.id')
        .notNullable()
});

exports.down = knex => knex.schema.dropTable('livro');
