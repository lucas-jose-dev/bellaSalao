import styles from './footer.module.css'
import tesoura from '/icons/tesoura.svg'
import instagram from '/icons/instagram.svg'
import fecebook from '/icons/fecebook.svg'
import emailBranco from '/icons/emailBrancoo.svg'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.divFooterPai}>
                    <div className={styles.divSlogan}>
                        <a href="">
                            <img src={tesoura} alt="imagen ilustrativa" />
                            Bella Salão
                        </a>
                        <p>
                            Transformando sua beleza com carinho e profissionalismo desde 2010.
                            Seu salão de confiança em São Paulo.
                        </p>
                    </div>
                    <div className={styles.divLinks}>
                        <h2>Links Rápidos</h2>
                        <ul>
                            <a href="#slogan">
                                <li>Início</li>
                            </a>
                            <a href="#servico">
                                <li>Serviço</li>
                            </a>
                            <a href="#galeria">
                                <li>Galeria</li>
                            </a>
                            <a href="#agenda">
                                <li>Agendamento</li>
                            </a>
                        </ul>
                    </div>
                    <div className={styles.divRedeSocial}>
                        <h2>Siga-nos</h2>
                        <p>Acompanhe nossas novidades e trabalhos nas redes sociais.</p>
                        <div>
                            <a href="">
                                <img src={instagram} alt="imagem ilustrativa" title='instagran' />
                            </a>
                            <a href="">
                                <img src={fecebook} alt="imagem ilustrativa" title='fecebook' />
                            </a>
                            <a href="">
                                <img src={emailBranco} alt="imagem ilustrativa" title='email' />
                            </a>
                        </div>
                    </div>
                    <p className={styles.pDireitos}>&copy; 2026 Bella Salão. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}