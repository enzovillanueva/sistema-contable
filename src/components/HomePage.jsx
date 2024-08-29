import React from 'react'
import { Head } from './Head'
import { ArticleHomePage } from './ArticleHomePage'
import { useLocation } from 'react-router-dom';

export const HomePage = () => {

  const location = useLocation();
  const {user} = location.state || {};

  return (
    <>
      <Head login={true} rol={user?.roles}/>
      {/* <h2>{user?.username}</h2> */}
      {user?.roles == 'SUPERUSER' ? <ArticleHomePage/> : <div>Bienvenido! Agregar Contenido</div>}

    </>
  )
}