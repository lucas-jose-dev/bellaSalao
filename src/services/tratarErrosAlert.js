
export default function emailNumber(erro) {

    switch (erro) {
        case "cadastroEmailRealizado":
            return {
                slogan: "Cadastro realizado com sucesso!!",
                informe: `Copy sua senha para fazer o login. Senha: {senhaGerada}`
            }
            break;
        case "cadastroNumberRealizado":
            return {
                slogan: "Cadastro realizado com sucesso!!",
                informe: `Copy sua senha para fazer o login. Senha: {senhaGerada}`
            }
            break;
        case "numerosCorretos":
            return {
                slogan: "lucas",
                informe: "Adicione a quantidade de números correto"
            }
            break;
        case "adicionaEmailouNumero":
            return {
                slogan: "lucas",
                informe: "Bonitão"
            }
            break;
    }
}
