import styles from './cadastro.module.css'
import estrela from '/icons/estrelaCirculoLogin.svg'
import email from '/icons/emailLogin.svg'
import telefone from '/icons/telefone2.svg'
import btnVoltar from '/icons/btnVoltar.svg'
import erroicone from '/icons/erros.svg'
import sucesso from '/icons/sucesso.svg'
import google from '/icons/google.svg'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import emailModules from '../../services/emailModule'
import gerarSenha from '../../services/senhaModules'
import Alert from '../components/Alert/Alert'
import emailNumber from '../../services/tratarErrosAlert'

export default function Cadastro() {
    const [valorEmail, setValorEmail] = useState("")
    const [valorNumber, setValorNumber] = useState("")
    const [valorNome, setValorNome] = useState("")
    // const [valorSenha, setValorSeha] = useState("")
    const [errorEmailNumber, setErrorEmailNumber] = useState(false)
    const [dadosError, setDadosError] = useState("")
    const [btnCopy, setBtnCopy] = useState("Copiar")
    const [mostrarALert, setMostrarAlert] = useState(false)
    const [senhaGerada, setSenhaGerada] = useState("")
    const [showEmailTelefone, setShowEmailTelefone] = useState("email")
    const navigate = useNavigate()

    function validadorEmail(valor) {
        // console.log(valorEmail)
        return /^[^\s@]+@(gmail\.com|outlook\.com|hotmail\.com)$/.test(valor)

    }

    function validadorNumero(valor) {
        return /^\d{10,11}$/.test(valor);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (valorNome) {
            if (valorEmail && valorNumber) {

                setErrorEmailNumber(false)
                setTimeout(() => setErrorEmailNumber(true), 0)
                const dados = emailNumber("duasFormasDeCadastro")
                setDadosError(dados)
                return

            } else if (valorEmail === "" && valorNumber === "") {

                setErrorEmailNumber(false)
                setTimeout(() => setErrorEmailNumber(true), 0)
                const dados = emailNumber("duasFormasDeCadastro")
                setDadosError(dados)
                return

            }

            if (valorEmail) {
                if (!validadorEmail(valorEmail)) {

                    setErrorEmailNumber(false)
                    setTimeout(() => setErrorEmailNumber(true), 0)
                    const dados = emailNumber("emailIncorreto")
                    setDadosError(dados)
                    return

                }

                setMostrarAlert(true)
                const senha = gerarSenha(8)
                setSenhaGerada(senha)
                emailModules(valorEmail, valorNome, senha)
                setErrorEmailNumber(false)
                setTimeout(() => setErrorEmailNumber(true), 0)
                const dados = emailNumber("cadastroEmailRealizado", valorNome, senha)
                setDadosError(dados)

                // navigate("/login")
                setValorEmail("")
                setValorNome("")

                // console.log(dadosError)
                return

            }

            if (valorNumber) {
                if (!validadorNumero(valorNumber)) {

                    setErrorEmailNumber(false)
                    setTimeout(() => setErrorEmailNumber(true), 0)
                    const dados = emailNumber("numerosCorretos")
                    setDadosError(dados)
                    return

                }
                setMostrarAlert(true)
                const senha = gerarSenha(8)
                setSenhaGerada(senha)
                emailModules(Number(valorNumber), valorNome, senha)

                console.log(senha)
                setErrorEmailNumber(false)
                setTimeout(() => setErrorEmailNumber(true), 0)
                const dados = emailNumber("cadastroNumberRealizado", valorNome, senha)
                setDadosError(dados)

                // navigate("/login")
                setValorNumber("")
                setValorNome("")
                return
            }

        } else {
            setErrorEmailNumber(false)
            setTimeout(() => setErrorEmailNumber(true), 0)
            const dados = emailNumber("nomeNaoAdicionado")
            setDadosError(dados)
        }

    }

    return (
        <>
            {errorEmailNumber && (<Alert
                show={true}
                sairDoAlert={mostrarALert}
                slogan={dadosError.slogan}
                informe={dadosError.informe}
                delay={dadosError.status === 'erros' ? 5000 : 100000000}
                iconeStatus={dadosError.status === 'erros' ? erroicone : sucesso}
                // estilosDivAlert={styles.divAlert}
                estilosDivItens={`${dadosError.status === 'erros' ? styles.divAlertItensErros : styles.divAlertItensSucesso}`}
                estilosDivTitulos={`${dadosError.status === 'erros' ? styles.divAlertTituloErros : styles.divAlertTituloSucesso}`}
            >
                <button
                    className={`
                        ${dadosError.status === "sucesso"
                            ? styles.open
                            : styles.close
                        }
                        ${styles.btnCopy}
                        `}
                    onClick={() => {
                        if (btnCopy === "Copiar") {
                            navigator.clipboard.writeText(senhaGerada)
                            setBtnCopy("Copiado")
                            setMostrarAlert(false)
                            setTimeout(() => {
                                navigate("/login")
                            }, 1000)
                        }
                        //else {
                        //     setBtnCopy("Copiar")
                        // }
                    }}
                >
                    {btnCopy}
                </button>
            </Alert>)}
            <section className={styles.sectionLogin}>
                <div className={styles.divLoginPai}>
                    <Link to="/login" className={styles.btnVoltar} title='Voltar para área de login'>
                        <img src={btnVoltar} alt="" />
                    </Link>
                    <div className={styles.divTitulo}>
                        <img src={estrela} alt="imagem de estrela" style={{ height: "5rem", width: "5rem" }} />
                        <h1>Beleza & Estilos</h1>
                        <p>Cadastro</p>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.divInputsCadastro}>
                            <label htmlFor="nome">Primeiro nome</label>
                            <div>
                                <img src={email} alt="" />
                                <input
                                    type="texo"
                                    name="nome"
                                    id="nome"
                                    value={valorNome}
                                    placeholder="Digite seu primeiro nome"
                                    onChange={(e) => {
                                        setValorNome(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className={styles.divLabelCadastro}>
                            <label
                                htmlFor="email"
                                className={showEmailTelefone === "email" ? styles.labelEmailTelefoneCadastro : ""}
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
                                className={showEmailTelefone === "telefone" ? styles.labelEmailTelefoneCadastro : ""}
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
                        <div className={`${styles.divInputsCadastro}
                        ${showEmailTelefone === "email"
                                ?
                                styles.divEmailTelefoneCadastroShow
                                :
                                styles.divEmailTelefoneCadastroClose
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
                        </div>

                        <div className={`${styles.divInputsCadastro}
                             ${showEmailTelefone === "telefone"
                                ?
                                styles.divEmailTelefoneCadastroShow
                                :
                                styles.divEmailTelefoneCadastroClose
                            }
                        `}>
                            <div>
                                <img src={telefone} alt="" />
                                <input
                                    type="tel"
                                    name="telefone"
                                    id="telefone"
                                    value={valorNumber}
                                    placeholder='(00) 0000-0000'
                                    maxLength={11}
                                    onChange={(e) =>
                                        setValorNumber(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className={styles.divCheckbox}>
                            <div>
                                <input type="checkbox" name="lembrar" id="lembrar" />
                                <label htmlFor="lembrar">Lembrar-me</label>
                            </div>
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>

                    <div className={styles.divOuCadastro}>
                        <div></div>
                        <p>ou</p>
                        <div></div>
                    </div>

                    <div className={styles.divBtnCadastro}>
                        <button>
                            <img src={google} alt="" />
                            Continuar com Google
                        </button>
                        <p>
                            Já tem um cadastro? 
                            <Link to="/login" className={styles.linke}>Login</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}