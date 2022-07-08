import React from 'react'
import HeroImage from '../assets/read_news.jpg'
import LogoSvg from '../assets/logo.svg'
import { FiArrowRight, FiSend } from 'react-icons/fi'

import { Container } from './style'
import { useState } from 'react'

const Home = () => {
  const [email, setEmail] = useState('')

  // handle function
  const handleSubmit = async e => {
    e.preventDefault()
    if (email !== '') {
      await alert('Email enviado com sucesso!')
      setEmail('')
    } else {
      alert('Campo obrigatório!')
    }
  }

  return (
    <div>
      <Container>
        <div className="container-left">
          <img src={LogoSvg} alt="" />

          <h1>atualize ideias e informações em 5 minutos.</h1>
          <h2>
            tudo que você precisa saber para começar seu dia bem e informado
          </h2>
          <p>
            noticias sobre o universo Rocketseat, e tudo o que precisa para
            começar o dia melhor. <br /> perfeito para se preparar para codar ☕
          </p>
          <label htmlFor="">Insira seu e-mail:</label>
          <div className="field">
            <input
              type="text"
              required
              placeholder="oi@rocketseat.com"
              // function onChange
              onChange={e => {
                setEmail(e.target.value)
                setEmail(null)
              }}
            />
            <button onClick={handleSubmit}>
              <FiSend fontSize={24} />
            </button>
          </div>
          <div className="button-outline">
            <a href="#">
              <span>deixe-me ler primeiro</span>
              <FiArrowRight fontSize={18} style={{ marginLeft: '10px' }} />
            </a>
          </div>
        </div>
        <div className="container-right">
          <img
            src={HeroImage}
            alt="Homem com a barba branca, sentado usando um computador em escritorio"
          />
        </div>
      </Container>
    </div>
  )
}

export default Home
