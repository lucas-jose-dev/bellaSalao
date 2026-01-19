import { useEffect, useState } from 'react'
import styles from './alert.module.css'
import emailNumber from '../../../services/tratarErrosAlert'


export default function Alert({ slogan, informe, delay, estilosDivAlert, estilosDivItens, estilosDivTitulos, estilosDivBtn, children, iconeStatus }) {
    const [showAlert, setShowAleert] = useState(false)


    useEffect(() => {
        setShowAleert(true)
        const timer = setTimeout(() => {
            setShowAleert(false)
        }, delay)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {showAlert && <div
                className={`${styles.divAlert} ${estilosDivAlert}`}
                onClick={() => {
                    setShowAleert(false)
                }}
            >
                <div className={`${styles.divItens} ${estilosDivItens}`}>
                    <img src={iconeStatus} alt="" />
                    <div className={`${styles.divTitulo} ${estilosDivTitulos}`}>
                        <h2>{slogan}</h2>
                        <p>{informe}</p>
                    </div>
                    <div className={`${estilosDivBtn}`}>
                        {children}
                    </div>
                </div>
            </div>}
        </>
    )
}