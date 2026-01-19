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
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (valorNome) {

            if (valorEmail && valorNumber) {
                    setErrorEmailNumber(false)
                    setTimeout(() => setErrorEmailNumber(true), 0)
                    const dados = emailNumber("duasFormasDeCadastro")
                    setDadosError(dados)
                    return
            
             } else if (valorEmail) {
                let senhaGerada = gerarSenha(8)
                emailModules(valorEmail, valorNome)
                setErrorEmailNumber(false)
                setTimeout(() => setErrorEmailNumber(true), 0)
                const dados = emailNumber("cadastroEmailRealizado")
                setDadosError(dados)

                // navigate("/login")
                setValorEmail("")
                setValorNome("")

                console.log(dadosError)
                return
            } else if (valorNumber) {
                if (valorNumber.length === 11) {
                    console.log(gerarSenha(8))
                    emailModules(Number(valorNumber), valorNome)

                    setErrorEmailNumber(false)
                    setTimeout(() => setErrorEmailNumber(true), 0)
                    const dados = emailNumber("cadastroNumberRealizado")
                    setDadosError(dados)

                    // navigate("/login")
                    setValorNumber("")
                    setValorNome("")
                    return
                }  else {
                    setErrorEmailNumber(false)
                    setTimeout(() => setErrorEmailNumber(true), 0)
                    const dados = emailNumber("numerosCorretos")
                    setDadosError(dados)
                    return
                }
            } else {
                setErrorEmailNumber(false)
                setTimeout(() => setErrorEmailNumber(true), 0)
                const dados = emailNumber("adicionaEmailouNumero")
                setDadosError(dados)
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
                slogan={dadosError.slogan}
                informe={dadosError.informe}
                delay={dadosError.status === 'erros' ? 10000 : 40000}
                iconeStatus={dadosError.status === 'erros' ? erroicone : sucesso}
                // estilosDivAlert={styles.divAlert}
                estilosDivItens={`${dadosError.status === 'erros' ? styles.divAlertItensErros : styles.divAlertItensSucesso}`}
                estilosDivTitulos={`${dadosError.status === 'erros' ? styles.divAlertTituloErros : styles.divAlertTituloSucesso}`}
            >
                <button
                    className={`${dadosError.status === "sucesso"
                        ? styles.open
                        : styles.close}
                        `}
                >
                    Copiar
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
                        <div className={styles.divEmail}>
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
                        <div className={styles.divEmail}>
                            <label htmlFor="email">E-mail</label>
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
                        <div className={styles.divOu}>
                            <div></div>
                            <p>ou</p>
                            <div></div>
                        </div>
                        <div className={styles.divNumber}>
                            <label htmlFor="number">Numero</label>
                            <div>
                                <img src={telefone} alt="" />
                                <input
                                    type="tel"
                                    name="number"
                                    id="number"
                                    value={valorNumber}
                                    placeholder='(00) 0000-0000'
                                    maxLength={11}
                                    onChange={(e) =>
                                        setValorNumber(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className={styles.divLinkSenha}>
                            <div>
                                <input type="checkbox" name="lembrar" id="lembrar" />
                                <label htmlFor="lembrar">Lembrar-me</label>
                            </div>
                        </div>

                        <button type="submit">Cadastrar</button>
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
                    </div>
                </div>
            </section>
        </>
    )
}