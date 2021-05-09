import React from 'react'
import FormInputs from '../formInputs'
import Button from '../Button'
import { changeDirection, changeName, changePhone } from '../../store/restaurantReducer'
import { useDispatch, useSelector } from 'react-redux'



export default function RestaurantForm(){

  const {
    name,
    direction,
    phone } = useSelector(({ restaurantReducer }) => ({
    name: restaurantReducer.name,
    direction: restaurantReducer.direction,
    phone: restaurantReducer.phone,
    }))


  const dispatch = useDispatch()

  return (
    <form>
      <FormInputs
        id='name'
        type='text'
        name='name'
        onChange={e => dispatch(changeName(e.target.value))}
        value={name}
      >
        Nombre
      </FormInputs>
      <FormInputs
        id='direction'
        type='text'
        name='direction'
        onChange={e => dispatch(changeDirection(e.target.value))}
        value={direction}
      >
        Dirección
      </FormInputs>
      <FormInputs
        id='phone'
        type='number'
        name='phone'
        onChange={e => dispatch(changePhone(e.target.value))}
        value={phone}
      >
        Celular
      </FormInputs>
      <Button
        type='button'
      >
        Editar perfil
      </Button>
    </form>
  )
}