function filtrarPorNome(){
    const titulo = document.querySelector('nav .centralizado .seach input').value

    const url = `http://localhost:5000/home?titulo=${titulo}`
    
    window.location.href = url 
}

function filtrarPorNomeLogado(){
    const titulo = document.querySelector('nav .centralizado .seach input').value

    const url = `http://localhost:5000/homeLogado?titulo=${titulo}`
    
    window.location.href = url 
}

function limparFiltros(){
    window.location.href = 'http://localhost:5000/home'
}

function limparFiltrosLogados(){
    window.location.href = 'http://localhost:5000/homeLogado'
}

function filtrarNormal(){
    const dados = {
        categoria : buscarCategoria(),
        autores : buscarAutores(),
        editoras : buscarEditoras()
    }
    
    const url = `http://localhost:5000/home?categoria=${dados.categoria.toString()}&autor=${dados.autores.toString()}&editora=${dados.editoras.toString()}`
    
    window.location.href = url
    
}

function filtrarLogado(){
    const dados = {
        categoria : buscarCategoria(),
        autores : buscarAutores(),
        editoras : buscarEditoras()
    }
    
    const url = `http://localhost:5000/homeLogado?categoria=${dados.categoria.toString()}&autor=${dados.autores.toString()}&editora=${dados.editoras.toString()}`
    
    window.location.href = url
    
}

function buscarCategoria(){
    const inputs = Array.from( document.querySelectorAll('.filter-option details.categoria div input') )
    const categoria = inputs.filter(input => input.checked === true).map(input => parseInt(input.value))

    return categoria
}

function buscarAutores(){
    const inputs = Array.from( document.querySelectorAll('.filter-option details.autor div input') )
    const autores = inputs.filter(input => input.checked === true).map(input =>input.value)

    return autores
}

function buscarEditoras(){
    const inputs = Array.from( document.querySelectorAll('.filter-option details.editora div input') )
    const editoras = inputs.filter(input => input.checked === true).map(input =>input.value)

    return editoras
}

/*
function buscarAnos(){
    const inputs = Array.from( document.querySelectorAll('.filter-option details.ano div input') )
    const anos = inputs.filter(input => input.checked === true).map(input =>input.value)

    return anos
}

function buscarPaginas(){
    const inputs = Array.from( document.querySelectorAll('.filter-option details.paginas div input') )
    const paginas = inputs.filter(input => input.checked === true).map(input =>input.value)

    return paginas
}

*/
