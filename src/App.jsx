import { useState } from 'react'
import Header from './components/Header/Header'
import Slogan from './components/Slogan/Slogan'
import Servico from './components/Servico/Servico'
import Galeria from './components/Galeria/Galeria'
import Agendamento from './components/Agendamento/Agendamento'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Slogan />
      <Servico />
      <Galeria />
      <Agendamento />
      <Footer />
    </>
  )
}

export default App
