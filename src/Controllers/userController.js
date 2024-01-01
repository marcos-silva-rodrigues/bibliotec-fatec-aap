const fatecApi = require('fatec-api')

const userController = {
     login : async (username, password) => {
        try {
            const minhaConta = new fatecApi.Account(username, password)
            const perfil = await minhaConta.getProfile()
        
            if(perfil.unit !== 'Faculdade de Tecnologia de Itaquaquecetuba'){
                console.log('sorry, voce possui credenciais de outra unidade')

                return {error: 'sorry, voce possui credenciais de outra unidade'}
            }

            console.log(`Seja bem vindo ${perfil.name}`)
            return perfil
            
        } catch (error) {
            return {error: 'erro ao acessar a conta'}
        }     
    }
}

module.exports = userController


