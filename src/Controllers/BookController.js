const knex = require('../database/index')

const bookController = {
    allBooks: async () => {
        try {        
            const results = await knex('livro')
                .select(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome',
                    knex.raw(`ARRAY_AGG(autor.nome || ' ' || autor.sobrenome || ' ' || autor.restante_nome) AS nome_autor`)
                )
                .join('categoria','livro.categoria_id', '=', 'categoria.id')
                .join('livro_autor','livro_autor.livro_id', '=', 'livro.id')
                .join('autor','autor.id', '=', 'livro_autor.autor_id')
                .groupBy(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome'
                )
                .orderBy('categoria.nome')

            return results 
        } catch (error) {
            console.log("erro ao acessar o BD");
        }  
    },
    seach: async (id) => {
        try {
            const result = await knex('livro')
                .select(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome',
                    knex.raw(`ARRAY_AGG(autor.nome || ' ' || autor.sobrenome || ' ' || autor.restante_nome) AS nome_autor`)
                )
                .join('categoria','livro.categoria_id', '=', 'categoria.id')
                .join('livro_autor','livro_autor.livro_id', '=', 'livro.id')
                .join('autor','autor.id', '=', 'livro_autor.autor_id')
                .groupBy(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome'
                )
                .where('livro.id','=', `${id}`)
            
            return result 
        } catch (error) {
            console.log("erro ao acessar o BD");
        }
        
    },
    load: async () => {
        try {
            const categorias = await knex('categoria').select("categoria.nome", "categoria.id")
            
            const autores = await knex('autor')
                .select(knex.raw(`ARRAY_AGG(autor.nome || ' ' || autor.sobrenome || ' ' || autor.restante_nome ) AS nome`), "autor.id")
                .distinct('id').orderBy('nome').groupBy('id', 'nome')

            const editoras = await knex('livro')
                .select(knex.raw('LOWER(livro.editora) AS editora')).distinct().orderBy('editora', 'asc')

            return { categorias, autores, editoras}

        } catch (error) {
            console.log("erro ao acessar o db")

        }
        
    },
    filter: async (categoria, autor, editora)=> {
        try {        
            
            if( isNaN(categoria[0])){
                categoria = await (await knex('categoria').select('categoria.id')).map((item) => item.id)                       
            }

            if(  isNaN(autor[0])){
                autor = await (await knex('autor').select('autor.id')).map((item) => item.id)
            }

            if(editora[0] === ''){
                editora = await (await knex('livro').distinct(knex.raw('LOWER(editora)'))).map((item) => item.lower)
            }
            
            
            const results = await knex('livro')
                .select(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome',
                    knex.raw(`ARRAY_AGG(autor.nome || ' ' || autor.sobrenome || ' ' || autor.restante_nome) AS nome_autor`)
                )
                .join('categoria',function() {
                    this.on('livro.categoria_id', '=', 'categoria.id').onIn('livro.categoria_id', categoria)
                  })
                .join('livro_autor',function() {
                    this.on('livro_autor.livro_id', '=', 'livro.id').onIn('livro_autor.autor_id', autor)
                  })
                .join('autor', 'autor.id', '=', 'livro_autor.autor_id')
                .whereIn(knex.raw('LOWER(livro.editora)'), editora)
                .groupBy(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome'
                )
                .orderBy('categoria.nome')
                
            

            return results 
        } catch (error) {
            console.log("erro ao acessar o BD");
        } 
    },
    seachPerName: async(titulo) => {
        try {
            const result = await knex('livro')
                .select(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome',
                    knex.raw(`ARRAY_AGG(autor.nome || ' ' || autor.sobrenome || ' ' || autor.restante_nome) AS nome_autor`)
                )
                .join('categoria','livro.categoria_id', '=', 'categoria.id')
                .join('livro_autor','livro_autor.livro_id', '=', 'livro.id')
                .join('autor','autor.id', '=', 'livro_autor.autor_id')
                .groupBy(
                    'livro.id',
                    'titulo',
                    'subtitulo',
                    'imagens',
                    'sobre',
                    'ano_publicacao',
                    'editora',
                    'edicao',
                    'paginas',
                    'disponivel',
                    'categoria.nome'
                )
                .where('livro.titulo','ILIKE', `%${titulo}%`)
            
            return result 
        } catch (error) {
            console.log("erro ao acessar o BD");
        }
    },
    validateId: async() => {
        try {
            const ids = await knex('livro').select('livro.id')

            return ids
        } catch (error) {
            console.log("erro ao acessar o bd")
        }
    }
}

module.exports = bookController