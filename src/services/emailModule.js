

export default function emailModules(valor) {
    console.log(valor)
    if (typeof valor === "number" ) {
        localStorage.setItem("Telefone", valor)
    } else {
        localStorage.setItem("Email", valor)
    }
}

// localStorage.removeItem("Telefone")
// localStorage.clear()