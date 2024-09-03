import React from 'react'
import { Head } from '../components/Header'
import animation from '../assets/image-viewpage.svg'
import "../styles/ViewPage.css"

export const ViewPage = () => {
  return (
    <>
      <Head />
      <div className='container-view'>
        <div className="img-view">
          <img src={animation}  />
        </div>
        <div className='content-view'>
          <div>
            <h1>Sistema contable</h1>
            <h2>Sistemas Administrativos II</h2>
            <h2>Sistema de ventas</h2>
          </div>
          <h3>Entrar</h3>
        </div>
      </div>
    </>
  )
}
