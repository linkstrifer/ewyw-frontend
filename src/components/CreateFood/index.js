import { useDispatch } from "react-redux"
import  FormInputs  from '../formInputs'
import  Button  from '../Button'
import {
  changeFoodName,
  changeFoodLabel,
  changeFoodPrice, } from '../../store/restaurantReducer'


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
        id='foodLabel'
        type='text'
        name='foodCut'
        onChange={e => dispatch(changeFoodLabel(e.target.value))}
      >
        Tipo
      </FormInputs>
      <FormInputs
        id='foodPrice'
        type='text'
        name='foodPrice'
        onChange={e => dispatch(changeFoodPrice(e.target.value))}
      >
        Precio
      </FormInputs>
      <Button
        type='submit'
      >
        Guardar alimento
      </Button>
    </>
  )
}