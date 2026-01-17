import { useEffect, useState } from 'react'
import styles from './alert.module.css'


export default function Alert({ show, slogan, informe, estilos, children }) {
    const [showAlert, setShowAleert] = useState(false)


    useEffect(() => {
        setShowAleert(show)
        const timer = setTimeout(() => {
            setShowAleert(false)
        }, 10000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {showAlert && <div
                className={`${estilos} ${styles.divAlert}`}
                onClick={() => {
                    setShowAleert(false)
                }}
            >
                <div>
                    <p>{slogan}</p>
                    <p>{informe}</p>
                </div>
                {children}
            </div>}
        </>
    )
}