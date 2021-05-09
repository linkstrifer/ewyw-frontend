import React from 'react'
import FormInputs from '../formInputs'
import Select from '../SelectInputs'

export default function OrderForm(){

  return(

    <>
      <h1>Realiza tu pedido</h1>
      <div>
        <Select
          id='selectProtein'
          label='Proteina'
        />
        <Select
          id='selectCut'
          label='Corte'
        />
        <Select
          id='selectPreparation'
          label='Preparacion'
          options={['Seleccione tipo de preparacion', 'Cocido', 'Asado', 'Frito']}
        />
        <Select
          id='selectQuantity'
          label='Cantidad'
          options={['Seleccione la cantidad', '100 gr', '200 gr', '300 gr']}
        />
        <FormInputs
          id='price'
          type='number'
          name='price'
        >
          Precio
        </FormInputs>
      </div>
      <div>
        <Select
          id='selectCarbohydrate'
          label='Carbohidrato'
        />
        <Select
          id='selectPreparation'
          label='Preparacion'
          options={['Seleccione tipo de preparacion', 'Cocido', 'Asado', 'Frito']}
        />
        <Select
          id='selectQuantity'
          label='Cantidad'
          options={['Seleccione la cantidad', '100 gr', '200 gr', '300 gr']}
        />
        <FormInputs
          id='price'
          type='number'
          name='price'
        >
          Precio
        </FormInputs>
      </div>
      <div>
        <Select
          id='selectVegetable'
          label='Vegetales'
        />
        <Select
          id='selectPreparation'
          label='Preparacion'
          options={['Seleccione tipo de preparacion', 'Cocido', 'Asado', 'Frito']}
        />
        <Select
          id='selectQuantity'
          label='Cantidad'
          options={['Seleccione la cantidad', '100 gr', '200 gr', '300 gr']}
        />
        <FormInputs
          id='price'
          type='number'
          name='price'
        >
          Precio
        </FormInputs>
      </div>
      <div>
        <Select
          id='selectDrinks'
          label='Bebidas'
        />
        <FormInputs
          id='price'
          type='number'
          name='price'
        >
          Precio
        </FormInputs>
      </div>
    </>
  )
}