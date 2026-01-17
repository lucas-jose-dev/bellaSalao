import styles from './slogan.module.css'


export default function Slogan() {
    return (
        <>
            <section className={styles.section} id='slogan'>
                <div className={styles.divSlogan}>
                    <h1>Sua Beleza, Nossa Paixão.</h1>
                    <p>
                        Especialistas em cabelo, sobrancelhas e unhas.
                        Transforme seu visual com nosso profissionais qualificados.
                    </p>
                    <a href="http://">Agende seu Horário</a>
                </div>
            </section>
        </>
    )
}