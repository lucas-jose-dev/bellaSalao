

export default function emailModules(valorTipoCadastro, nome) {
    // console.log(valorTipoCadastro, nome)
    if (typeof valorTipoCadastro === "number" ) {
        localStorage.setItem("Telefone", valorTipoCadastro)
        localStorage.setItem("Nome", nome)
    } else {
        localStorage.setItem("Email", valorTipoCadastro)
        localStorage.setItem("Nome", nome)
        // console.log(nome, valorTipoCadastro)
    }
}

// localStorage.removeItem("Telefone")
// localStorage.clear()