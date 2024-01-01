
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('categoria').insert([
        { nome: 'programacao'},
        { nome: 'administracao'},
        { nome: 'matematica'},
        { nome: 'financas'},
        { nome: 'ingles'},
        { nome: 'tecnologia'}
      ]);
    });
};

/*
  CREATE TABLE IF NOT EXISTS categoria(
    id SERIAL NOT NULL,
    nome VARCHAR(30) UNIQUE NOT NULL, 
    PRIMARY KEY(id) ON DELETE CASCADE
  );
*/
