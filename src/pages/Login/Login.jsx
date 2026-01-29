import styles from './login.module.css'
import estrela from '/icons/estrelaCirculoLogin.svg'
import estrela2 from '/icons/estrela.svg'
import email from '/icons/emailLogin.svg'
import cadeado from '/icons/cadeado.svg'
import btnVoltar from '/icons/btnVoltar.svg'
import google from '/icons/google.svg'
import telefone from '/icons/telefone2.svg'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import Alert from '../components/Alert/Alert'


export default function Login() {
    const nome = localStorage.getItem('Nome')
    
    const [valorEmail, setValorEmail] = useState("")
    const [valorTelefone, setValorTelefone] = useState("")
    const [valorSenha, setValorSenha] = useState("")
    const [showAlert, setShowAleert] = useState(sessionStorage.getItem("loginAlertVisto"))
    const [showError, setShowError] = useState("")
    const [nomeSpan, setNomeSpan] = useState()
    const navigate = useNavigate()

    const [showEmailTelefone, setShowEmailTelefone] = useState("email")

    function btnSubmit(e) {
        e.preventDefault()
        const valorEmailBanco = localStorage.getItem("Email")
        const valorTelefoneBanco = localStorage.getItem("Telefone")
        const valorSenhaBanco = localStorage.getItem("Senha")
        

        if (showEmailTelefone === "email") {

            if (valorEmail === valorEmailBanco) {

                if (valorSenha === valorSenhaBanco) {
                    localStorage.setItem("Status", "Logado")
                    //Em produção
                    navigate("/")
                } else if (valorSenha === "") {
                    setNomeSpan(true)
                    setShowError("senha")
                    return
                } else {
                    setNomeSpan(false)
                    setShowError("senha")
                    return
                }

                setValorEmail("")
                setValorSenha("") //isso terá que sair quando a área home tiver pronta. Os 3
                setShowError("")

            } else if (valorEmail === "") {
                setNomeSpan(true)
                setShowError("email")
                return
            } else {
                setNomeSpan(false)
                setShowError("email")
                return
            }

        } else if (showEmailTelefone === "telefone") {

            if (valorTelefone === valorTelefoneBanco) {

                if (valorSenha === valorSenhaBanco) {
                    localStorage.setItem("Status", "Logado")
                    //Em produção
                    navigate("/")
                } else if (valorSenha === "") {
                    setNomeSpan(true)
                    setShowError("senha")
                    return
                } else {
                    setNomeSpan(false)
                    setShowError("senha")
                    return
                }
                console.log(valorEmailBanco)

                setValorTelefone("")
                setValorSenha("") //isso terá que sair quando a área home tiver pronta. Os 3
                setShowError("")

            } else if (valorTelefone === "") {
                setNomeSpan(true)
                setShowError("telefone")
                return
            } else {
                setNomeSpan(false)
                setShowError("telefone")
                return
            }
        }
    }

    useEffect(() => {
        if (showAlert === "false") {
            sessionStorage.setItem("loginAlertVisto", "true")
        }

        // console.log("btnCadastro mudou para:", typeof showAlert)
    }, [])

    return (
        <>
            <Alert
                show={showAlert === "true"}
                iconeStatus={estrela2}
                estilosDivAlert={styles.divAlertLogin}
                estilosDivItens={styles.divItensLogin}
                delay={10000}
                slogan={"Bem-vindo à página de login!"}
                informe={`Por gentileza, não Adicione seu E-mail ou Número pessoal.
                        Isso é só uma simlação, então pode colocar um fictício.`}
            ></Alert>
            <section className={styles.sectionLogin}>
                <div className={styles.divLoginPai}>
                    <Link
                        to="/"
                        className={styles.btnVoltar}
                        title='Voltar para pagina'
                    >
                        <img src={btnVoltar} alt="" />
                    </Link>
                    <div className={styles.divTitulo}>
                        <img src={estrela} alt="imagem de estrela" style={{ height: "5rem", width: "5rem" }} />
                        <h1>Beleza & Estilos</h1>
                        <p>Entre na sua conta</p>
                    </div>
                    <form onSubmit={btnSubmit} className={styles.form}>
                        <div className={styles.divLabelLogin}>
                            <label
                                htmlFor="email"
                                className={`${showEmailTelefone === "email" ? styles.labelEmailTelefoneLogin : ""}`}
                                onClick={() => {
                                    if (showEmailTelefone === "email") {
                                        setShowEmailTelefone("email")
                                    } else if (showEmailTelefone === "telefone") {
                                        setShowEmailTelefone("email")
                                    }
                                }}
                            >
                                E-mail
                            </label>
                            <p>ou</p>
                            <label
                                htmlFor="telefone"
                                className={`${showEmailTelefone === "telefone" ? styles.labelEmailTelefoneLogin : ""}`}
                                onClick={() => {
                                    if (showEmailTelefone === "telefone") {
                                        setShowEmailTelefone("telefone")
                                    } else if (showEmailTelefone === "email") {
                                        setShowEmailTelefone("telefone")
                                    }
                                }}
                            >
                                Telefone
                            </label>
                        </div>
                        <div className={`
                        ${styles.divInputsLogin} 
                        ${showEmailTelefone === "email"
                                ?
                                styles.divEmailTelefoneLoginShow
                                :
                                styles.divEmailTelefoneLoginClose
                            } 
                            `}>
                            <div>
                                <img src={email} alt="" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={valorEmail}
                                    placeholder="seu@email.com"
                                    onChange={(e) => {
                                        setValorEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <span className={`${showError === "email"
                                ?
                                styles.spanShowError
                                :
                                styles.spanCloseError}`}>
                                {nomeSpan ? "Adicione um Email." : "Email incorreto"}
                            </span>
                        </div>
                        <div className={`${styles.divInputsLogin} ${showEmailTelefone === "telefone"
                            ?
                            styles.divEmailTelefoneLoginShow
                            :
                            styles.divEmailTelefoneLoginClose
                            } 
                            `}>
                            <div>
                                <img src={telefone} alt="" />
                                <input
                                    type="tel"
                                    name="telefone"
                                    id="telefone"
                                    value={valorTelefone}
                                    maxLength={11}
                                    placeholder="(00) 0000-0000"
                                    onChange={(e) => {
                                        setValorTelefone(e.target.value)
                                    }}
                                />
                            </div>
                            <span className={`${showError === "telefone"
                                ?
                                styles.spanShowError
                                :
                                styles.spanCloseError}`}>
                                {nomeSpan ? "Adicione um telefone." : "Telefone incorreto"}
                            </span>
                        </div>

                        <div className={styles.divInputsLogin}>
                            <label htmlFor="senha">Senha</label>
                            <div className={styles.divSenhaLogin}>
                                <img src={cadeado} alt="" />
                                <input
                                    type="password"
                                    value={valorSenha}
                                    name="senha"
                                    id="senha"
                                    placeholder="......"
                                    onChange={(e) => {
                                        setValorSenha(e.target.value)
                                    }}
                                />

                            </div>
                            <span className={`${showError === "senha"
                                ?
                                styles.spanShowError
                                :
                                styles.spanCloseError}`}>
                                {nomeSpan ? "Adicione uma senha." : "Senha incorreta"}
                            </span>
                        </div>
                        <div className={styles.divLinkCheckbox}>
                            <div>
                                <input type="checkbox" name="lembrar" id="lembrar" />
                                <label htmlFor="lembrar">Lembrar-me</label>
                            </div>
                            <a href="/">Esqueceu a senha?</a>
                        </div>

                        <button type="submit">Entrar</button>
                    </form>

                    <div className={styles.divOu}>
                        <div></div>
                        <p>ou</p>
                        <div></div>
                    </div>

                    <div className={styles.divBtnLogin}>
                        <button>
                            <img src={google} alt="" />
                            Continuar com Google
                        </button>
                        <p>
                            Não tem uma conta?
                            <Link
                                to="/cadastro"
                                title='Cadastrar'
                                onClick={() => {
                                    sessionStorage.setItem("loginAlertVisto", "false")
                                }}
                            >
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}