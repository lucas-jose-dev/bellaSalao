

export default function emailNumber(erro, nome, valorSenha) {

    switch (erro) {
        case "cadastroEmailRealizado": {
            return {
                slogan: `Cadastro realizado com sucesso, ${nome}!!`,
                informe: `Copy sua senha para fazer o login. Senha: ${valorSenha}`,
                status: "sucesso"
            }
        }
            break;
        case "cadastroNumberRealizado": {
            return {
                slogan: `Cadastro realizado com sucesso, ${nome}!!`,
                informe: `Copy sua senha para fazer o login. Senha: ${valorSenha}`,
                status: "sucesso"
            }
        }
            break;
        case "nomeNaoAdicionado":
            return {
                slogan: "Adiconar um nome",
                informe: "Adicionar um nome para realizar seu cadastro.",
                status: "erros"
            }
        case "numerosCorretos":
            return {
                slogan: "Adicionar seu celular ou telefone fixo",
                informe: "Não adicione telefone pessoal. Adicione a quantidade correta de números.",
                status: "erros"
            }
            break;
        case "emailIncorreto":
            return {
                slogan: "Adicionar um E-mail valido",
                informe: "Não adicione E-mail pessoal. Ex: teste@gmail.com, teste@hotmail, etc...",
                status: "erros"
            }
            break;
        case "duasFormasDeCadastro":
            return {
                slogan: "Adicionar um E-mail ou Número para cadastro",
                informe: "Não adicione telefone ou e-mail pessoal. Crie um fictício.",
                status: "erros"
            }
            break;
    }
}
