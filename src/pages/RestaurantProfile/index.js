import React, { useEffect } from 'react'
import  Header  from '../../components/Header'
import RestaurantForm from '../../components/RestaurantForm'
import { useParams } from 'react-router'
import { getRestaurantPublic } from '../../store/restaurantReducer'
import { useDispatch, useSelector } from 'react-redux'


export default function RestaurantProfile(){

  const { restaurantId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurantPublic(restaurantId))
  },[dispatch, restaurantId])

  const {
    name,
    direction,
    phone } = useSelector(({
      restaurantReducer
    }) =>({
    name: restaurantReducer.name,
    direction: restaurantReducer.direction,
    phone: restaurantReducer.phone,
  }))

  return(
    <>
      <Header/>
      <main>
        <RestaurantForm
          name={name}
          direction={direction}
          phone={phone}
        />
      </main>
    </>
  )
}