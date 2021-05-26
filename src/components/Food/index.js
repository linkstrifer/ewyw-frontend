import { useEffect } from "react";
import Button from '../Button/index'
import './styles.css'


export default function Food({
  data: { id, foodName, types, quantity, selectedType},
  onDelete,
  onUpdate}){
    const foodPrice = selectedType
    ? types.find(({foodLabel}) => foodLabel === selectedType).foodPrice
    : 0;

    useEffect(() => {
      if (quantity < 1){
        onDelete(id);
      }
    }, [quantity, onDelete, id, onUpdate])

    return (
      <div className='todo'>
        <label>
          <span><strong>Alimento:</strong> {foodName}</span><br/>

          <label><strong>Tipo: </strong>
            <select
              onChange={(e) => {
                const { value } = e.target

                onUpdate('selectedType', value)
              } }
            >
              <option>Seleccione tipo</option>
              {types.map((type) => (
                <option key={type.foodLabel} value={type.foodLabel}>
                  {type.foodLabel}
                </option>
              ))}
            </select>
          </label>
        </label>

        <div>
          <span>Cantidad: {quantity}</span>
          <Button
            type='button'
            handleClick={() => {
              onUpdate('quantity', quantity + 1)
            }}
          >
            Agregar cantidad
          </Button>
          <Button
            type='button'
            handleClick={() => {
              onUpdate('quantity', quantity - 1)
            }}
          >
            Quitar cantidad
          </Button>
          <Button
            type='button'
            handleClick={() => onDelete(id)}
          >
            Eliminar producto
          </Button>
        </div>

        <span className='price'>Precio: {foodPrice * quantity}</span>
      </div>
    )
  }