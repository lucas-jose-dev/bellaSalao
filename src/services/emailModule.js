

export default function emailModules(valorTipoCadastro, nome, valorSenha) {
    // console.log(valorTipoCadastro, nome)
    if (typeof valorTipoCadastro === "number" ) {
        localStorage.setItem("Telefone", valorTipoCadastro)
        localStorage.setItem("Nome", nome)
        localStorage.setItem("Senha", valorSenha)
        localStorage.setItem("Status", "Deslogado")
    } else {
        localStorage.setItem("Email", valorTipoCadastro)
        localStorage.setItem("Nome", nome)
        localStorage.setItem("Senha", valorSenha)
        localStorage.setItem("Status", "Deslogado")
        // console.log(nome, valorTipoCadastro)
    }
}

// localStorage.removeItem("Telefone")
// localStorage.clear()