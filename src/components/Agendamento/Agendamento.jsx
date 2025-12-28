import styles from './agendamento.module.css'
import Contato from './components/Contato'
import local from '/icons/local.svg'
import telefone from '/icons/telefone.svg'
import email from '/icons/email.svg'
import hora from '/icons/hora.svg'
import { useState } from 'react'


export default function Agendamento() {
    const [tech, setTech] = useState('')


    return (
        <>
            <section className={styles.sectionAgendamento} id='agenda'>
                <div className={styles.divTitulo}>
                    <h2>Agende seu Horário</h2>
                    <p>Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento.</p>
                </div>
                <div className={styles.divPaiContatos}>
                    <div className={styles.divFormulario}>
                        <form action="">
                            <div className={styles.divInput}>
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" id="nome" />
                            </div>
                            <div className={styles.divInput}>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="" id="email" />
                            </div>
                            <div className={styles.divInput}>
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" name="" id="telefone" />
                            </div>
                            <div className={styles.divInput}>
                                <label htmlFor="servico">Serviço Desejado</label>

                                <select name="" value={tech} onChange={(e) => setTech(e.target.value)} >
                                    <option value="" disabled>Selecione um Serviço</option>
                                    <option value="cabelo">Cabelo</option>
                                    <option value="sobrancelha">Sobrancelha</option>
                                    <option value="unha">Unha</option>
                                    <option value="combo">Combo de Serviços</option>
                                </select>
                            </div>
                            <div className={styles.divInputData}>
                                <div className={styles.divInput}>
                                    <label htmlFor="data">Data Preferida</label>
                                    <input type="date" name="" id="data" />
                                </div>
                                <div className={styles.divInput}>
                                    <label htmlFor="hora">Horário Preferido</label>
                                    <input type="time" name="" id="hora" />
                                </div>
                            </div>
                            <div className={styles.divInput}>
                                <label htmlFor="texto">Mensagem (opicional)</label>
                                <textarea name="" id="" rows={9}></textarea>
                            </div>

                            <button type="submit">Solicitar Agendamento</button>
                        </form>
                    </div>
                    <div className={styles.divEndereco}>
                        <p>Informações de Contato</p>
                        <Contato
                            img={local}
                            paragrafo1={'Endereço:'}
                            paragrafo2={'São Paulo - SP, 00124-203'}
                            paragrafo3={'Rua das Flores, 123 - Center'}
                        />
                        <Contato
                            img={telefone}
                            paragrafo1={'Telefone:'}
                            paragrafo2={'(11) 98765-4321'}
                            paragrafo3={'(11) 3455-7890'}
                        />
                        <Contato
                            img={email}
                            paragrafo1={'E-mail:'}
                            paragrafo2={'contato@gmail.com.br'}
                        />
                        <Contato
                            img={hora}
                            paragrafo1={'Horario de funcionamento:'}
                            paragrafo2={'Segunda a Sexta: 9h às 19h'}
                            paragrafo3={'Sabado: 9h às 17h'}
                            paragrafo4={'Domingo: Fechado'}
                        />

                        <div className={styles.divInformacao}>
                            <h2>Dica Importante</h2>
                            <p>Para garantir seu horário preferido, recomendamos agendar com antecedência mínima de 24 horas. Em caso de imprevistos, pedimos que cancele ou remarque com pelo menos 3 horas de antecedência.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}