const BookController = require("./BookController")
const user = require("./userController")

const pageController = {

    async home(req, res) {

        const params = Object.entries(req.query).length
        const titulo = req.query.titulo

        if (params === 0) {

            const data = await BookController.load()

            const categorias = data.categorias.map(item => item)
            const autores = data.autores.map(item => item);
            const editoras = data.editoras.map(item => item.editora);

            const livros = await BookController.allBooks()

            const book = livros.map(({ id, imagens, titulo, subtitulo, nome_autor }) => {
                const obj = {
                    id,
                    imagens,
                    titulo,
                    subtitulo,
                    autor: nome_autor
                }
                return obj
            })
            return res.render('home.html', { book, categorias, autores, editoras })

        } else if (titulo) {
            const data = await BookController.load()

            const categorias = data.categorias.map(item => item)
            const autores = data.autores.map(item => item);
            const editoras = data.editoras.map(item => item.editora);


            const livros = await BookController.seachPerName(titulo)
            

            const book = livros.map(({ id, imagens, titulo, subtitulo, nome_autor }) => {
                const obj = {
                    id,
                    imagens,
                    titulo,
                    subtitulo,
                    autor: nome_autor
                }
                return obj
            })

            return res.render('home.html', { book, categorias, autores, editoras })

        } else {
            const data = await BookController.load()

            const categorias = data.categorias.map(item => item)
            const autores = data.autores.map(item => item);
            const editoras = data.editoras.map(item => item.editora);

            let { categoria, autor, editora } = req.query

            categoria = categoria.split(',').map((item) => parseInt(item))
            autor = autor.split(',').map((item) => parseInt(item))
            editora = editora.split(',')

            const livros = await BookController.filter(categoria, autor, editora)
            

            const book = livros.map(({ id, imagens, titulo, subtitulo, nome_autor }) => {
                const obj = {
                    id,
                    imagens,
                    titulo,
                    subtitulo,
                    autor: nome_autor
                }
                return obj
            })

            return res.render('home.html', { book, categorias, autores, editoras })
        }
    },
    async homeLogado(req, res) {
        

        const params = Object.entries(req.query).length
        const titulo = req.query.titulo

        if (params === 0) {
            
            const data = await BookController.load()

            const categorias = data.categorias.map(item => item)
            const autores = data.autores.map(item => item);
            const editoras = data.editoras.map(item => item.editora);

            const livros = await BookController.allBooks()

            const book = livros.map(({ id, imagens, titulo, subtitulo, nome_autor }) => {
                const obj = {
                    id,
                    imagens,
                    titulo,
                    subtitulo,
                    autor: nome_autor
                }
                return obj
            })
            return res.render('homeLogado.html', { book, categorias, autores, editoras })

        } else if (titulo) {
            const data = await BookController.load()

            const categorias = data.categorias.map(item => item)
            const autores = data.autores.map(item => item);
            const editoras = data.editoras.map(item => item.editora);

            const livros = await BookController.seachPerName(titulo)
        

            const book = livros.map(({ id, imagens, titulo, subtitulo, nome_autor }) => {
                const obj = {
                    id,
                    imagens,
                    titulo,
                    subtitulo,
                    autor: nome_autor
                }
                return obj
            })

            return res.render('homeLogado.html', { book, categorias, autores, editoras })

        } else {
            
            const data = await BookController.load()

            const categorias = data.categorias.map(item => item)
            const autores = data.autores.map(item => item);
            const editoras = data.editoras.map(item => item.editora);

            let { categoria, autor, editora } = req.query

            categoria = categoria.split(',').map((item) => parseInt(item))
            autor = autor.split(',').map((item) => parseInt(item))
            editora = editora.split(',')

            

            const livros = await BookController.filter(categoria, autor, editora)
            

            const book = livros.map(({ id, imagens, titulo, subtitulo, nome_autor }) => {
                const obj = {
                    id,
                    imagens,
                    titulo,
                    subtitulo,
                    autor: nome_autor
                }
                return obj
            })
            return res.render('homeLogado.html', { book, categorias, autores, editoras })
        }
        
    },
    async livro(req, res) {

        try {
            const id = parseInt(req.query.id)
            const idsValidos = await (await BookController.validateId()).map(item => item.id)
            

            const conteins = idsValidos.includes(id)
            const idInvalido = id <= 0 || typeof id !== "number" ? true : false

            if (idInvalido || conteins === false) {
                return res.redirect('/Erro')
            }

            const livro = await BookController.seach(id)
            return res.render('livro.html', { livro: livro[0] })
        } catch (error) {
            console.log(error);
            return res.redirect('/Erro')
        }
    },
    async login(req, res) {
        const { txtLogin, txtPassword } = req.body

        try {
            const acesso = await user.login(txtLogin, txtPassword)
            
            if (acesso.error) {
                
                return res.redirect('/Erro')
            }
            return res.redirect('/HomeLogado')
        } catch (error) {
            return res.redirect('/Erro')
        }
    },
    entrar(req, res) {
        return res.render('login.html')
    },
    historico(req, res) {
        res.render('historico.html')
    },
    conta(req, res) {
        res.render('conta.html')
    },
    donate(req, res) {
        res.render('donate.html')
    },
    erro(req, res) {
        res.render('erro.html')
    }
}

module.exports = pageController