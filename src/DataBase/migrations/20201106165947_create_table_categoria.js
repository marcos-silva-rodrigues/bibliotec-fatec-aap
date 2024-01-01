
exports.up = knex => knex.schema.createTable('categoria', table => {
        table.increments('id').unsigned()
        table.string('nome').unique().notNullable()
    });

exports.down = knex =>  knex.schema.dropTable('categoria') ;
