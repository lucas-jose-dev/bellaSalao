import styles from './contato.module.css'


export default function Contato({img, paragrafo1, paragrafo2, paragrafo3, paragrafo4}) {
    return (
        <>
        <div className={styles.divContato}>
            <img src={img} alt="imagen ilustrativa" />
            <div>
                <p className={styles.paraGrafo1}>{paragrafo1}</p>
                <p>{paragrafo2}</p>
                <p>{paragrafo3}</p>
                <p>{paragrafo4}</p>
            </div>
        </div>
        </>
    )
}