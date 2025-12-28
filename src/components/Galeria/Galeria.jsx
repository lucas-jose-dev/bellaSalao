import CardGaleria from './components/CardGaleria'
import styles from './galeria.module.css'
import cabelo from '/image/cabelo.webp'
import cabelo2 from '/image/cabelo2.avif'
import nailUnha from '/image/nailUnha.jpeg'
import salao from '/image/salao.jpg'
import unha from '/image/unha.jpg'
import sobrancelha from '/image/sobrancelha.avif'

export default function Galeria() {
    return (
        <>
            <section className={styles.sectionGaleria} id='galeria'>
                <h2>Galeria de Trabalhos</h2>
                <p>Confira alguns dos nossos trabalhos e se inspire para sua próxima transformação.</p>
                <div className={styles.divGaleria}>
                    <CardGaleria
                        img={cabelo}
                        title={'Serviço de cabelo'}
                    />
                    <CardGaleria
                        img={cabelo2}
                        title={'Coloração de cabelo'}
                    />
                    <CardGaleria
                        img={sobrancelha}
                        title={'Design de sobrancelhas'}
                    />
                    <CardGaleria
                        img={unha}
                        title={'Manicure'}
                    />
                    <CardGaleria
                        img={nailUnha}
                        title={'Nail art'}
                    />
                    <CardGaleria
                        img={salao}
                        title={'Ambiente do salão'}
                    />
                </div>
            </section>
        </>
    )
}