
export default function gerarSenha(comprimento) {
    // const letrasMin = 'abcdefghijklmnopqrstuvwxyz';
    // const letrasMai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // const numeros = '0123456789';
    // const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    const caracteres =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='

    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const senhaAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(senhaAleatorio);
    }

    return senha;
    console.log(senha)
}
