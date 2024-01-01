
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('autor').del()
    .then(function () {
      // Inserts seed entries
      return knex('autor').insert([
        { nome: 'Adriana', sobrenome: 'Grade', restante_nome: 'Fiori Souza'},
        { nome: 'Gisele', sobrenome: 'Cilli', restante_nome: 'da Costa'},
        { nome: 'Leonilde', sobrenome: 'Favoreto', restante_nome: 'de Mello'},
        { nome: 'Andrew', sobrenome: 'Stuart', restante_nome: 'Tanenbaum'},
        { nome: 'Abelardo', sobrenome: 'de Lima', restante_nome: 'Puccini'},
        { nome: 'Alberto', sobrenome: 'Luiz', restante_nome: 'Albertin'},
        { nome: 'Rosa', sobrenome: 'Maria', restante_nome: 'de Moura Albertin'},
        { nome: 'Alexandre', sobrenome: 'Assaf', restante_nome: 'Neto'},
        { nome: 'Ana', sobrenome: 'Fernanda', restante_nome: 'Gomes Ascencio'},
        { nome: 'Edilene', sobrenome: 'Aparecida', restante_nome: 'Veneruchi De. Campos'},
        { nome: 'André', sobrenome: 'Luís', restante_nome: 'Fernandes Limeira'},
        { nome: 'Carlos', sobrenome: 'Alberto', restante_nome: 'dos Santos Silva'},
        { nome: 'Raimundo', sobrenome: 'Nonato', restante_nome: 'Souza Silva'},
        { nome: 'Anteu', sobrenome: 'Fabiano', restante_nome: 'Lúcio Gasparini'},
        { nome: 'Antonio', sobrenome: 'Cesar', restante_nome: 'Amaru Maximiano'},
        { nome: 'Ari', sobrenome: 'Ferreira', restante_nome: 'de Abreu'},
        { nome: 'Fabiano', sobrenome: 'Guasti', restante_nome: 'Lima'},
        { nome: 'Behrouz', sobrenome: 'A.', restante_nome: 'Forouzan'},
        { nome: 'Carlos', sobrenome: 'Alberto', restante_nome: 'Di Agustini'},
        { nome: 'Nei', sobrenome: 'Schilling', restante_nome: 'Zelmanovits'},
        { nome: 'Carlos', sobrenome: 'Augusto', restante_nome: 'Pereira'},
        { nome: 'Décio', sobrenome: 'Torres', restante_nome: 'Cruz'},
        { nome: 'Daniel', sobrenome: 'Augusto', restante_nome: 'Moreira'},
        { nome: 'Denis', sobrenome: 'Alcides', restante_nome: 'Rezende'},
        { nome: 'Aline', sobrenome: 'França', restante_nome: 'de Abreu'},
        { nome: 'Djalma', sobrenome: 'de Pinho', restante_nome: 'Rebouças de Oliveira'},
        { nome: 'Fernando', sobrenome: 'César', restante_nome: 'Marra E. Silva'},
        { nome: 'Jocildo', sobrenome: 'Figueiredo', restante_nome: 'Correia Neto'},
        { nome: 'James', sobrenome: 'F.', restante_nome: 'Kurose'},
        { nome: 'Keith', sobrenome: 'W.', restante_nome: 'Ross'},
        { nome: 'Lawrence', sobrenome: 'J.', restante_nome: 'Gitman'},
        { nome: 'Luiz', sobrenome: 'Paulo', restante_nome: 'Maia'},
        { nome: 'Luiz', sobrenome: 'Roberto', restante_nome: 'Vannucci'},
        { nome: 'José', sobrenome: 'Nicolau', restante_nome: 'Pompeu'},
        { nome: 'Oziel', sobrenome: 'Moreira', restante_nome: 'Neto'},
        { nome: 'Paulo', sobrenome: 'Blauth', restante_nome: 'Menezes'},
        { nome: 'Pedro', sobrenome: 'A.', restante_nome: 'Morettin'},
        { nome: 'Pedro', sobrenome: 'Luiz', restante_nome: 'Côrtes'},
        { nome: 'Rebecca', sobrenome: 'M.', restante_nome: 'Riordan'},
        { nome: 'Richard', sobrenome: 'A.', restante_nome: 'Brealey'},
        { nome: 'Stewart', sobrenome: 'C.', restante_nome: 'Myers'},
        { nome: 'Suzana', sobrenome: 'Abreu', restante_nome: 'de Oliveira Souza'},
        { nome: 'Victorine', sobrenome: 'Viviane', restante_nome: 'Mizhahi'},
        { nome: 'André', sobrenome: 'Luiz', restante_nome: 'Villar Forbellone'},
        { nome: 'Conceição', sobrenome: 'a Absy'},
        { nome: 'Abraham', sobrenome: 'Silberschatz'},
        { nome: 'Amaury', sobrenome: 'Bentes'},
        { nome: 'Carlos', sobrenome: 'Vieira'},
        { nome: 'Budi', sobrenome: 'Kurniawan'},
        { nome: 'Efraim', sobrenome: 'Turban'},
        { nome: 'Linda', sobrenome: 'Volonino'},
        { nome: 'Robert', sobrenome: 'Jacobs'},
        { nome: 'Gelson', sobrenome: 'Iezzi'},
        { nome: 'Samuel', sobrenome: 'Hazzan'},
        { nome: 'David', sobrenome: 'Degenszajn'},
        { nome: 'Idalberto', sobrenome: 'Chiavenato'},
        { nome: 'Marcos', sobrenome: 'Cobra'},
        { nome: 'Michael', sobrenome: 'Duckworth'},
        { nome: 'Michael', sobrenome: 'Morrison'},
        { nome: 'Osvaldo', sobrenome: 'Dolce'},
        { nome: 'Franklin', sobrenome: 'Allen'},
        { nome: 'Seizen', sobrenome: 'Yamashiro'},
        { nome: 'University', sobrenome: 'of Oxford'},
        { nome: 'Richard', sobrenome: 'Chase'},
        { nome: 'Kathy', sobrenome: 'Sierra'},
        { nome: 'Bert', sobrenome: 'Bates'}

      ]);
    });
};

/*
  INSERT INTO autor(nome, sobrenome, restante_nome)
  VALUES ('Adriana', 'Grade', 'Fiori Souza'),
  ('Gisele', 'Cilli', 'da Costa'),
  ('Leonilde', 'Favoreto', 'de Mello'),
  ('Andrew', 'Stuart', 'Tanenbaum'),
  ('Abelardo', 'de Lima', 'Puccini'),
  ('Alberto', 'Luiz', 'Albertin'),
  ('Rosa', 'Maria', 'de Moura Albertin'),
  ('Alexandre', 'Assaf', 'Neto'),
  ('Ana', 'Fernanda', 'Gomes Ascencio'),
  ('Edilene', 'Aparecida', 'Veneruchi De. Campos'),
  ('André', 'Luís', 'Fernandes Limeira'),
  ('Carlos', 'Alberto', 'dos Santos Silva'),
  ('Raimundo', 'Nonato', 'Souza Silva'),
  ('Anteu', 'Fabiano', 'Lúcio Gasparini'),
  ('Antonio', 'Cesar', 'Amaru Maximiano'),
  ('Ari', 'Ferreira', 'de Abreu'),
  ('Fabiano','Guasti','Lima'),
  ('Behrouz','A.','Forouzan'),
  ('Carlos','Alberto','Di Agustini'), 
  ('Nei','Schilling','Zelmanovits'),
  ('Carlos','Augusto','Pereira'),
  ('Décio','Torres','Cruz'),
  ('Daniel','Augusto','Moreira'),
  ('Denis','Alcides','Rezende'), 
  ('Aline','França','de Abreu'),
  ('Djalma','de Pinho','Rebouças de Oliveira'),
  ('Fernando','César','Marra E. Silva'),
  ('Jocildo','Figueiredo','Correia Neto'),
  ('James','F.','Kurose'), 
  ('Keith','W.','Ross'),
  ('Lawrence','J.','Gitman'),
  ('Luiz','Paulo','Maia'),
  ('Luiz','Roberto','Vannucci'),
  ('José','Nicolau','Pompeu'),
  ('Oziel','Moreira','Neto'),
  ('Paulo','Blauth','Menezes'),
  ('Pedro','A.','Morettin'),
  ('Pedro','Luiz','Côrtes'),
  ('Rebecca','M.','Riordan'),
  ('Richard','A.','Brealey'), 
  ('Stewart','C.','Myers'),
  ('Suzana','Abreu','de Oliveira Souza'),
  ('Victorine','Viviane','Mizhahi'),
  ('André','Luiz','Villar Forbellone');


  INSERT INTO autor(nome, sobrenome)
  VALUES ('Conceição', 'a Absy'),
  ('Abraham', 'Silberschatz'),
  ('Amaury', 'Bentes'),
  ('Carlos', 'Vieira'),
  ('Budi','Kurniawan'),
  ('Efraim','Turban'),
  ('Linda','Volonino'),
  ('Robert','Jacobs'), 
  ('Gelson','Iezzi'),
  ('Samuel','Hazzan'),
  ('David','Degenszajn'),
  ('Idalberto','Chiavenato'),
  ('Marcos','Cobra'),
  ('Michael','Duckworth'),
  ('Michael','Morrison'),
  ('Osvaldo','Dolce'),
  ('Franklin','Allen'),
  ('Seizen','Yamashiro'),
  ('University','of Oxford')
  ('Richard', 'Chase'),
  ('Kathy', 'Sierra'),
  ('Bert', 'Bates');'


*/