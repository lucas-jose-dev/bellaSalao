import styles from './cardServico.module.css'

export default function CardServico({ img, children, title, paragrafo, mudaCss }) {
    return (
        <>
            <div className={`${mudaCss} ${styles.divCard}`}>
                <img src={img} alt="umagem ilustrativa" style={{height: "4rem", width: "4rem"}} />
                <h3>{title}</h3>
                <p>{paragrafo}</p>
                {children}
            </div>
        </>
    )
}