import tesoura from '/icons/tesoura.svg'
import hanbur from '/icons/list.svg'
import xSvg from '/icons/x.svg'
import styles from './header.module.css'
import { useState } from 'react'
import { Link } from "react-router-dom"

export default function Header() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <header className={styles.header}>
                <div className={styles.divHeader}>
                    <div className={styles.divName}>
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
                    className={`${styles.divLinks} ${menu ? styles.trueMenu : styles.falseMenu}`}
                >
                    <Link to="/login"
                        onClick={() => {
                            sessionStorage.setItem("loginAlertVisto", "true")
                            if (menu) {
                                setMenu(false)
                            }
                        }}>
                        Login
                    </Link>
                    <a
                        href="#slogan"
                        onClick={() => {
                            if (menu) {
                                setMenu(false)
                            }
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
                        onClick={() => {
                            if (menu) {
                                setMenu(false)
                            }
                        }}
                    >
                        Galeria
                    </a>
                    <a
                        href="#agenda" className={styles.linkButton}
                        onClick={() => {
                            if (menu) {
                                setMenu(false)
                            }
                        }}
                    >
                        Contatos
                    </a>
                </div>
            </header>
        </>
    )
}