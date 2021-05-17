import { useDispatch } from "react-redux"
import  FormInputs  from '../formInputs'
import  Button  from '../Button'
import {
  changeFoodName, changeFoodCut,
  changeFoodPreparation, changeFoodQuantity,
  changeFoodPrice } from '../../store/restaurantReducer'


export default function CreateFood(){

  const dispatch = useDispatch()

  return(
    <>
      <FormInputs
        id='foodName'
        type='text'
        name='foodName'
        onChange={e => dispatch(changeFoodName(e.target.value))}
      >
        Nombre
      </FormInputs>
      <FormInputs
        id='foodCut'
        type='text'
        name='foodCut'
        onChange={e => dispatch(changeFoodCut(e.target.value))}
      >
        Tipo de corte
      </FormInputs>
      <FormInputs
        id='foodPreparation'
        type='text'
        name='foodPreparation'
        onChange={e => dispatch(changeFoodPreparation(e.target.value))}
      >
        Tipo de preparacion
      </FormInputs>
      <FormInputs
        id='foodQuantity'
        type='text'
        name='foodQuantity'
        onChange={e => dispatch(changeFoodQuantity(e.target.value))}
      >
        Cantidad
      </FormInputs>
      <FormInputs
        id='foodPrice'
        type='text'
        name='foodPrice'
        onChange={e => dispatch(changeFoodPrice(e.target.value))}
      >
        Precio:
      </FormInputs>
      <Button
        type='submit'
      >
        Guardar alimento
      </Button>
    </>
  )
}