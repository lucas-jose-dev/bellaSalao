
let nome = localStorage.getItem("Nome")

export default function emailNumber(erro) {

    switch (erro) {

        case "cadastroEmailRealizado":
            return {
                slogan: `Cadastro realizado com sucesso, ${nome}!!`,
                informe: `Copy sua senha para fazer o login. Senha: {senhaGerada}`,
                status: "sucesso"
            }
            break;
        case "cadastroNumberRealizado":
            return {
                slogan: `Cadastro realizado com sucesso, ${nome}!!`,
                informe: `Copy sua senha para fazer o login. Senha: {senhaGerada}`,
                status: "sucesso"
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
                slogan: "Adicionar 11 números",
                informe: "Não adicione número pessoal. Adicione a quantidade correta de números.",
                status: "erros"
            }
            break;
        case "adicionaEmailouNumero":
            return {
                slogan: "Adicionar um E-mail ou Número para cadastro",
                informe: "Não adicione número ou e-mail pessoal. Crie um fictício.",
                status: "erros"
            }
            break;
        case "duasFormasDeCadastro":
            return {
                slogan: "Adicionar um E-mail ou Número para cadastro",
                informe: "Não adicione número ou e-mail pessoal. Crie um fictício.",
                status: "erros"
            }
            break;
    }
}
