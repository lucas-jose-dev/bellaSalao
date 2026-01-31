import tesoura from '/icons/tesoura.svg'
import hanbur from '/icons/list.svg'
import xSvg from '/icons/x.svg'
import imgUsuario from '/icons/estrelaCirculoLogin.svg'
import styles from './header.module.css'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { use } from 'react'
import Alert from '../../pages/components/Alert/Alert'

export default function Header() {

    const [menu, setMenu] = useState(false)
    const [confirmacaoSair, setConfirmacaoSair] = useState(false)
    const statusDeLogin = localStorage.getItem("Status")

    const navigate = useNavigate()

    return (
        <>
            {confirmacaoSair && (<Alert
                delay={100000}
                show={confirmacaoSair}
                sairDoAlert={true}
            >
                <button
                    onClick={() => {
                        setConfirmacaoSair(false)
                    }}
                >Cancelar</button>
                <button
                    onClick={() => {
                        localStorage.setItem("Status", "Deslogado")
                        navigate("/")
                        setConfirmacaoSair(false)
                        setMenu(false)
                    }}
                >Continuar</button>

            </Alert>)}
            <header className={styles.header}>
                <div className={styles.divHeader}>
                    <div className={`${styles.divName} ${statusDeLogin === "Logado" ? styles.nomeDoSite : ""}`}>
                        <img src={tesoura} alt="" style={{ color: "black" }} />
                        <a href="/">Bella Salão</a>
                    </div>
                    <p className={styles.menuHabur}
                        onClick={() => {
                            // let prev = menu
                            if (!menu) {
                                setMenu(true)
                            } else {
                                setMenu(false)
                            }
                            // setMenu(prev)
                        }}
                    >{menu ?
                        <img
                            src={xSvg}
                            alt="menu"
                            style={{ height: "2rem" }}
                        />
                        :
                        <img
                            src={hanbur}
                            alt="menu"
                            style={{ height: "2rem" }}
                        />}
                    </p>
                </div>
                <div
                    className={`
                        ${styles.divLinks} 
                        ${menu ? styles.trueMenu : styles.falseMenu} 
                        ${statusDeLogin === "Logado" ? styles.divHeaderClose : ""}`}
                >
                    <Link to="/login"
                        className={statusDeLogin === "Logado" ? styles.loginMobleClose : ""}
                        onClick={() => {
                            sessionStorage.setItem("loginAlertVisto", "true")
                            if (menu) {
                                setMenu(false)
                            }
                        }}
                    >
                        Login
                    </Link>
                    <div className={`${styles.divNomeUsuario} ${statusDeLogin !== "Logado" ? styles.nomeDoUsuarioClose : ""}`}>
                        <img src={imgUsuario} alt="" />
                        <p>{localStorage.getItem("Nome")}</p>
                    </div>
                    <a
                        href="#slogan"
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById("slogan")?.scrollIntoView({
                                behavior: "smooth"
                            })
                            setMenu(false)
                        }}>
                        Início
                    </a>
                    <a
                        href="#servico"
                        onClick={() => {
                            if (menu) {
                                setMenu(false)
                            }
                        }}
                    >
                        Serviços
                    </a>
                    <a
                        href="#galeria"
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById("galeria")?.scrollIntoView({
                                behavior: "smooth"
                            })
                            setMenu(false)
                        }}
                    >
                        Galeria
                    </a>
                    <a
                        href="#agenda"
                        className={`${styles.linkButton} ${statusDeLogin === "Logado" ? styles.linkButtonMoble : ""}`}
                        onClick={(e) => {
                            document.getElementById("agenda")?.scrollIntoView({
                                behavior: "smooth"
                            })
                            setMenu(false)
                        }}
                    >
                        Contatos
                    </a>
                    <a
                        href='#link'
                        className={`${styles.linkButton} ${statusDeLogin !== "Logado" ? styles.sairClose : ""}`}
                        onClick={() => {
                            setConfirmacaoSair(true)
                        }}>
                        Sair
                    </a>
                </div>
                <div className={`
                    ${styles.PaiNomeDoUsuario} 
                    ${styles.PaiNomeDoUsuarioMoble} 
                    ${statusDeLogin !== "Logado" ? styles.nomeDoUsuarioClose : ""}
                    `}
                >
                    <div className={styles.divNomeUsuario}>
                        <img src={imgUsuario} alt="" />
                        <p>{localStorage.getItem("Nome")}</p>
                    </div>

                    <div className={`${styles.divName}`}>
                        {/* <img src={tesoura} alt="" style={{ color: "black" }} /> */}
                        <a href="/">Bella Salão</a>
                    </div>
                    
                    <div>
                        <button
                            href='#link'
                            className={`${styles.botaoSair}`}
                            onClick={() => {
                                setConfirmacaoSair(true)
                            }}>
                            Sair
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}