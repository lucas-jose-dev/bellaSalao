import styles from './login.module.css'
import estrela from '/icons/estrelaCirculoLogin.svg'
import email from '/icons/emailLogin.svg'
import cadeado from '/icons/cadeado.svg'
import btnVoltar from '/icons/btnVoltar.svg'
import google from '/icons/google.svg'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import Alert from '../components/Alert/Alert'

export default function Login() {

    return (
        <>
            <Alert
                show={true}
                slogan={"Bem-vindo à página de login!"}
                informe={`Por gentileza, não Adicione seu E-mail ou Número pessoal.
                        Isso é só uma simlação, então pode colocar um fictício.`}
            />
            <section className={styles.sectionLogin}>
                <div className={styles.divLoginPai}>
                    <Link to="/" className={styles.btnVoltar} title='Voltar para pagina'>
                        <img src={btnVoltar} alt="" />
                    </Link>
                    <div className={styles.divTitulo}>
                        <img src={estrela} alt="imagem de estrela" style={{ height: "5rem", width: "5rem" }} />
                        <h1>Beleza & Estilos</h1>
                        <p>Entre na sua conta</p>
                    </div>
                    <form action="" className={styles.form}>
                        <div className={styles.divEmail}>
                            <label htmlFor="email">E-mail</label>
                            <div>
                                <img src={email} alt="" />
                                <input type="email" required name="email" id="email" placeholder="seu@email.com" />
                            </div>
                        </div>
                        <div className={styles.divSenha}>
                            <label htmlFor="senha">Senha</label>
                            <div>
                                <img src={cadeado} alt="" />
                                <input type="password" required name="senha" id="senha" placeholder="......" />
                            </div>
                        </div>
                        <div className={styles.divLinkSenha}>
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
                            <Link to="/cadastro" title='Cadastrar'> Cadastre-se</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}