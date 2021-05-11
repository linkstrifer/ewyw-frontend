import Button from '../Button'
import Select from '../SelectInputs'
import FormInputs from '../formInputs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDirection, changeName, changePhone } from '../../store/restaurantReducer'
import { getProteins } from '../../store/proteinReducer'
import { getCarbohydrates } from '../../store/carbohydrateReducer'
import { getVegetables } from '../../store/vegetableReducer'
import { getDrinks } from '../../store/drinkReducer'


export default function RestaurantForm(){

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProteins())
    dispatch(getCarbohydrates())
    dispatch(getVegetables())
    dispatch(getDrinks())
  }, [dispatch])

  const {
    name,
    direction,
    phone,
    proteins,
    carbohydrates,
    vegetables,
    drinks,
    } = useSelector(({
      restaurantReducer,
      proteinReducer,
      carbohydrateReducer,
      vegetableReducer,
      drinkReducer,}) => ({
    name: restaurantReducer.name,
    direction: restaurantReducer.direction,
    phone: restaurantReducer.phone,
    proteins: proteinReducer.proteins,
    carbohydrates: carbohydrateReducer.carbohydrates,
    vegetables: vegetableReducer.vegetables,
    drinks: drinkReducer.drinks,
    }))


  return (
    <>
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
      <div>
        <h2>Crear Producto - Restaurante</h2>
        <Button
          type='button'
        >
          Crear producto
        </Button>
        <Select
          id='selectFood'
          label='Seleccionar Alimento'
          options={[{_id:'1', name:'Proteina'}, {_id:'2', name:'Carbohidrato'}, {_id:'3', name:'Vegetales'}, {_id:'3', name:'Bebidas'}]}
        />
        <FormInputs
          id='createProtein'
          type='text'
          name='createProtein'
        >
          Nombre proteina
        </FormInputs>
        <FormInputs
          id='createCut'
          type='text'
          name='createCut'
        >
          Tipo de corte
        </FormInputs>
        <FormInputs
          id='createPreparation'
          type='text'
          name='createPreparation'
        >
          Tipo de preparacion
        </FormInputs>
        <FormInputs
          id='createQuantity'
          type='text'
          name='createQuantity'
        >
          Cantidad
        </FormInputs>
        <Button
          type='button'
        >
          Guardar alimento
        </Button>
        <div>
          <h2>Realiza tu pedido - Clientes</h2>
          <Button
            type='button'
          >
            Crear pedido
          </Button>
        </div>
        <div>
          <Select
            id='selectProtein'
            label='Seleccione Proteina'
            options={proteins}
          />
          <Select
            id='selectCut'
            label='Seleccione Corte'
            options={[{_id:'1', name:'Lomito'}, {_id:'2', name:'Punta de anca'}, {_id:'3', name:'Costillas'}]}
          />
          <Select
            id='selectPreparation'
            label='Preparacion'
            options={[{_id:'1', name:'Asado'}, {_id:'2', name:'Cocido'}, {_id:'3', name:'Frito'}]}
          />
          <Select
            id='selectQuantity'
            label='Cantidad'
            options={[{_id:'1', name:'100 gr'}, {_id:'2', name:'200 gr'}, {_id:'3', name:'300 gr'}]}
          />
          <FormInputs
            id='price'
            type='number'
            name='price'
            // onChange={e => dispatch(changePhone(e.target.value))}
            // value={phone}
          >
            Precio:
          </FormInputs>
        </div>
        <div>
          <Select
            id='selectCarbohydrate'
            label='Seleccione Carbohidrato'
            options={carbohydrates}
          />
        </div>
        <div>
          <Select
            id='selectVegetable'
            label='Seleccione Verdura'
            options={vegetables}
          />
        </div>
        <div>
          <Select
            id='selectDrink'
            label='Seleccione Bebida'
            options={drinks}
          />
        </div>
      </div>
    </>
  )
}