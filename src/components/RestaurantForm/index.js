import axios from 'axios'
import Button from '../Button'
import Select from '../SelectInputs'
import FormInputs from '../formInputs'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeDirection, changeName,changePhone,
  changeFoodType, changeError } from '../../store/restaurantReducer'
import { getFoods } from '../../store/foodReducer'
import { getDrinks } from '../../store/drinkReducer'
import CreateFood from '../CreateFood'
import CreateDrink from '../CreateDrink'
import CreateOrder from '../CreateOrder'


export default function RestaurantForm(){

  const [createFood, setCreateFood] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFoods())
    dispatch(getDrinks())
  }, [dispatch])

  const {
    name,
    direction,
    phone,
    foodType,
    foodName,
    foodCut,
    foodPreparation,
    foodQuantity,
    foodPrice,
    foods,
    drinks,
    } = useSelector(({
      restaurantReducer,
      foodReducer,
      drinkReducer,}) => ({
    name: restaurantReducer.name,
    direction: restaurantReducer.direction,
    phone: restaurantReducer.phone,
    foodType: restaurantReducer.foodType,
    foodName: restaurantReducer.foodName,
    foodCut: restaurantReducer.foodCut,
    foodPreparation: restaurantReducer.foodPreparation,
    foodQuantity: restaurantReducer.foodQuantity,
    foodPrice: restaurantReducer.foodPrice,
    foods: foodReducer.foods,
    drinks: drinkReducer.drinks,
    }))

    async function handleSubmit(e){
      e.preventDefault()
      if( foodType === 'Bebidas'){
        try {
          await axios({
            method: 'POST',
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: '/drinks/createDrink',
            data: {
              foodType,
              foodName,
              foodQuantity: foodQuantity.split(','),
              foodPrice: foodPrice.split(','),
            }
          })
        } catch(error){
          dispatch(changeError(error.message))
        }
      } else {
        try {
          await axios({
            method: 'POST',
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: '/foods/createFood',
            data: {
              foodType,
              foodName,
              foodCut: foodCut.split(','),
              foodPreparation: foodPreparation.split(','),
              foodQuantity: foodQuantity.split(','),
              foodPrice: foodPrice.split(','),
            }
          })
        } catch(error){
          dispatch(changeError(error.message))
        }
      }
    }
  return (
    <>
      <div>
        <form>
          <h1>Perfil Restaurante</h1>
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
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <h2>Crear Producto - Restaurante</h2>
          <Button
            type='button'
            handleClick={()=> setCreateFood(!createFood)}
          >
            Crear producto
          </Button>
          {createFood === true &&
            <>
              <Select
                id='selectFood'
                label='Seleccionar Alimento'
                type='foodName'
                onChange={e => dispatch(changeFoodType(e.target.value))}
                options={[
                  {_id:'Proteina', foodName:'Proteina'},
                  {_id:'Carbohidrato', foodName:'Carbohidrato'},
                  {_id:'Vegetales', foodName:'Vegetales'},
                  {_id:'Bebidas', foodName:'Bebidas'}
                ]}
              />
              {foodType === 'Proteina' &&
                <CreateFood />
              }
              {foodType === 'Carbohidrato' &&
                <CreateFood />
              }
              {foodType === 'Vegetales' &&
                <CreateFood />
              }
              {foodType === 'Bebidas' &&
                <CreateDrink />
              }
            </>
          }
        </form>
      </div>

      <div>
        <form>
          <h2>Realiza tu pedido - Clientes</h2>
          <div>
            <CreateOrder
              foods={foods}
              drinks={drinks}
            />
          </div>
          <p><b>Confirmar pedido</b></p>
          <Button
            type='button'
          >
            Cancelar pedido
          </Button>
          <Button
            type='button'
          >
            Pagar pedido
          </Button>
        </form>

      </div>
    </>
  )
}