import React from 'react'
import  Header  from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'


export default function ListaRestaurantes(){

  return(
    <>
      <Header/>
      <main>
        <RestaurantsList/>
      </main>
    </>
  )
}

