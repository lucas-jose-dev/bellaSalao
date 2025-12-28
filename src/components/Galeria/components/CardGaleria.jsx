import styles from './cardGaleria.module.css'

export default function CardGaleria({img, title}) {
    return (
        <>
            <div className={styles.divCardImg}>
                <img src={img} alt="imagem ilustrativa" />
                <p>{title}</p>
            </div>
        </>
    )
}