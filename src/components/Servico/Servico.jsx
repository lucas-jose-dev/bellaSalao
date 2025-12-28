import estrelaCirculo from '/icons/estrelaCirculo.svg'
import olhoCirculo from '/icons/olhoCirculo.svg'
import tesouraCirculo from '/icons/tesouraCirculo.svg'
import CardServico from './components/CardServico'
import styles from './servico.module.css'

export default function Servico() {
    return (
        <>
            <section className={styles.sectionServico} id='servico'>
                <div className={styles.divSlogan}>
                    <h2 className={styles.header}>Nossos Serviços</h2>
                    <p>
                        Oferecemos uma ampla gama de serviços de beleza com produtos de
                        alta qualidade e profissionais experientes.
                    </p>
                </div>
                <div className={styles.divCard}>
                    <CardServico
                        img={tesouraCirculo}
                        title={"Cabelo"}
                        paragrafo={"Cortes modernos, coloração profissional, tratamentos cailares e penteados para todo as ocasiões."}
                    >
                        <ul>
                            <li>Corte feminino e mascuino</li>
                            <li>Coloração e mechas</li>
                            <li>Hidratação e reconstrução</li>
                            <li>Escova e penteados</li>
                        </ul>
                    </CardServico>
                    <CardServico
                        img={olhoCirculo}
                        title={"Sobrancelhas"}
                        paragrafo={"Design de sobrancelhas personalizado para realçar seu olhar com técnicas modernas e profissionais."}
                    >
                        <ul>
                            <li>Design de sobrancelha</li>
                            <li>Henna</li>
                            <li>Micropigmentação</li>
                            <li>Limpeza de pele facial</li>
                        </ul>
                    </CardServico>
                    <CardServico
                        img={estrelaCirculo}
                        title={"Unhas"}
                        paragrafo={"Manicure e pedicure completos, nail art criativa e cuidados especiais para suas unhas."}
                    >
                        <ul>
                            <li>Manicure e pedicure</li>
                            <li>Unhas em gel</li>
                            <li>Nail art</li>
                            <li>Alongamento de unhas</li>
                        </ul>
                    </CardServico>
                </div>
            </section>
        </>
    )
}