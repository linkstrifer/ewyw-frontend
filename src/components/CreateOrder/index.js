import Button from '../Button/index'
import React, {useState} from 'react'
import Select from '../SelectInputs'
import SelectCut from '../SelectCut'


export default function CreateOrder({drinks, foods}){

  const [createOrder, setCreateOrder] = useState(false)
  const [selectFood, setSelectFood] = useState('')
  const [selectProtein, setSelectProtein] = useState('')
  const [selectCarbohydrate, setSelectCarbohydrate] = useState('')
  const [selectVegetable, setSelectVegetable] = useState('')
  const [selectDrink, setSelectDrink] = useState('')
  const [selectCutProtein, setSelectCutProtein] = useState('')
  const [selectQuantityProtein, setSelectQuantityProtein] = useState('')
  const [selectCutCarbohydrate, setSelectCutCarbohydrate] = useState('')
  const [selectQuantityCarbohydrate, setSelectQuantityCarbohydrate] = useState('')
  const [selectCutVegetable, setSelectCutVegetable] = useState('')
  const [selectQuantityVegetable, setSelectQuantityVegetable] = useState('')
  const [selectQuantityDrink, setSelectQuantityDrink] = useState('')
  const [addFood, setAddFood] = useState('')

  return(
    <>
      <Button
        type='button'
        handleClick={() => setCreateOrder(!createOrder)}
      >
        Crear pedido
      </Button>
      <div>
        {createOrder === true &&
          <>
            <Select
              id='selectFood'
              label='Seleccionar Alimento'
              type='foodName'
              onChange={(e) => setSelectFood(e.target.value)}
              options={[
                {_id:'Proteina', foodName:'Proteina'},
                {_id:'Carbohidrato', foodName:'Carbohidrato'},
                {_id:'Vegetales', foodName:'Vegetales'},
                {_id:'Bebidas', foodName:'Bebidas'}
              ]}
            />
            {selectFood === 'Proteina' &&
              <>
                <Select
                  id='selectProtein'
                  label='Seleccione Proteina'
                  onChange={(e) => setSelectProtein(e.target.value)}
                  options={foods.filter(food => food.foodType === 'Proteina')}
                  type='foodName'
                />
                {
                  selectProtein &&
                  <>
                    <SelectCut
                      id='selectCut'
                      label='Seleccione Corte'
                      onChange={(e) => setSelectCutProtein(e.target.value)}
                      options={foods.filter(food => food._id === selectProtein)[0].foodCut}
                    />
                    <SelectCut
                      id='selectPreparation'
                      label='Preparacion'
                      options={foods.filter(food => food._id === selectProtein)[0].foodPreparation}
                    />
                    <SelectCut
                      id='selectQuantity'
                      label='Cantidad'
                      onChange={(e) => setSelectQuantityProtein(e.target.value)}
                      options={foods.filter(food => food._id === selectProtein)[0].foodQuantity}
                    />
                    {selectQuantityProtein && selectCutProtein === foods.filter(food => food._id === selectProtein)[0].foodCut[0] &&
                      <>
                        { selectQuantityProtein === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectProtein)[0].foodPrice[0]}</span>
                        }
                        { selectQuantityProtein === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectProtein)[0].foodPrice[0]) * 2}</span>
                        }
                        { selectQuantityProtein === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectProtein)[0].foodPrice[0]) * 3}</span>
                        }
                      </>
                    }
                    {selectQuantityProtein && selectCutProtein === foods.filter(food => food._id === selectProtein)[0].foodCut[1] &&
                      <>
                        { selectQuantityProtein === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectProtein)[0].foodPrice[1]}</span>
                        }
                        { selectQuantityProtein === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectProtein)[0].foodPrice[1]) * 2}</span>
                        }
                        { selectQuantityProtein === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectProtein)[0].foodPrice[1]) * 3}</span>
                        }
                      </>
                    }
                    {selectQuantityProtein && selectCutProtein === foods.filter(food => food._id === selectProtein)[0].foodCut[2] &&
                      <>
                        { selectQuantityProtein === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectProtein)[0].foodPrice[2]}</span>
                        }
                        { selectQuantityProtein === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectProtein)[0].foodPrice[2]) * 2}</span>
                        }
                        { selectQuantityProtein === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectProtein)[0].foodPrice[2]) * 3}</span>
                        }
                      </>
                    }
                  </>
                }
              </>
            }
            {selectFood === 'Carbohidrato' &&
              <>
                <Select
                  id='selectCarbohydrate'
                  label='Seleccione Carbohidrato'
                  onChange={(e) => setSelectCarbohydrate(e.target.value)}
                  options={foods.filter(food => food.foodType === 'Carbohidrato')}
                  type='foodName'
                />
                {
                  selectCarbohydrate &&
                  <>
                    <SelectCut
                      id='selectCut'
                      label='Seleccione Corte'
                      onChange={(e) => setSelectCutCarbohydrate(e.target.value)}
                      options={foods.filter(food => food._id === selectCarbohydrate)[0].foodCut}
                    />
                    <SelectCut
                      id='selectPreparation'
                      label='Preparacion'
                      options={foods.filter(food => food._id === selectCarbohydrate)[0].foodPreparation}
                    />
                    <SelectCut
                      id='selectQuantity'
                      label='Cantidad'
                      onChange={(e) => setSelectQuantityCarbohydrate(e.target.value)}
                      options={foods.filter(food => food._id === selectCarbohydrate)[0].foodQuantity}
                    />
                    {selectQuantityCarbohydrate && selectCutCarbohydrate === foods.filter(food => food._id === selectCarbohydrate)[0].foodCut[0] &&
                      <>
                        { selectQuantityCarbohydrate === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[0]}</span>
                        }
                        { selectQuantityCarbohydrate === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[0]) * 2}</span>
                        }
                        { selectQuantityCarbohydrate === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[0]) * 3}</span>
                        }
                      </>
                    }
                    {selectQuantityCarbohydrate && selectCutCarbohydrate === foods.filter(food => food._id === selectCarbohydrate)[0].foodCut[1] &&
                      <>
                        { selectQuantityCarbohydrate === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[1]}</span>
                        }
                        { selectQuantityCarbohydrate === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[1]) * 2}</span>
                        }
                        { selectQuantityCarbohydrate === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[1]) * 3}</span>
                        }
                      </>
                    }
                    {selectQuantityCarbohydrate && selectCutCarbohydrate === foods.filter(food => food._id === selectCarbohydrate)[0].foodCut[2] &&
                      <>
                        { selectQuantityCarbohydrate === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[2]}</span>
                        }
                        { selectQuantityCarbohydrate === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[2]) * 2}</span>
                        }
                        { selectQuantityCarbohydrate === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectCarbohydrate)[0].foodPrice[2]) * 3}</span>
                        }
                      </>
                    }
                  </>
                }
              </>
            }
            {selectFood === 'Vegetales' &&
              <>
                <Select
                  id='selectVegetable'
                  label='Seleccione Vegetal'
                  onChange={(e) => setSelectVegetable(e.target.value)}
                  options={foods.filter(food => food.foodType === 'Vegetales')}
                  type='foodName'
                />
                {
                  selectVegetable &&
                  <>
                    <SelectCut
                      id='selectCut'
                      label='Seleccione Corte'
                      onChange={(e) => setSelectCutVegetable(e.target.value)}
                      options={foods.filter(food => food._id === selectVegetable)[0].foodCut}
                    />
                    <SelectCut
                      id='selectPreparation'
                      label='Preparacion'
                      options={foods.filter(food => food._id === selectVegetable)[0].foodPreparation}
                    />
                    <SelectCut
                      id='selectQuantity'
                      label='Cantidad'
                      onChange={(e) => setSelectQuantityVegetable(e.target.value)}
                      options={foods.filter(food => food._id === selectVegetable)[0].foodQuantity}
                    />
                    {selectQuantityVegetable && selectCutVegetable === foods.filter(food => food._id === selectVegetable)[0].foodCut[0] &&
                      <>
                        { selectQuantityVegetable === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectVegetable)[0].foodPrice[0]}</span>
                        }
                        { selectQuantityVegetable === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectVegetable)[0].foodPrice[0]) * 2}</span>
                        }
                        { selectQuantityVegetable === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectVegetable)[0].foodPrice[0]) * 3}</span>
                        }
                      </>
                    }
                    {selectQuantityVegetable && selectCutVegetable === foods.filter(food => food._id === selectVegetable)[0].foodCut[1] &&
                      <>
                        { selectQuantityVegetable === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectVegetable)[0].foodPrice[1]}</span>
                        }
                        { selectQuantityVegetable === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectVegetable)[0].foodPrice[1]) * 2}</span>
                        }
                        { selectQuantityVegetable === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectVegetable)[0].foodPrice[1]) * 3}</span>
                        }
                      </>
                    }
                    {selectQuantityVegetable && selectCutVegetable === foods.filter(food => food._id === selectVegetable)[0].foodCut[2] &&
                      <>
                        { selectQuantityVegetable === '100gr' &&
                            <span>Precio: {foods.filter(food => food._id === selectVegetable)[0].foodPrice[2]}</span>
                        }
                        { selectQuantityVegetable === '200gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectVegetable)[0].foodPrice[2]) * 2}</span>
                        }
                        { selectQuantityVegetable === '300gr' &&
                            <span>Precio: {(foods.filter(food => food._id === selectVegetable)[0].foodPrice[2]) * 3}</span>
                        }
                      </>
                    }
                  </>
                }
              </>
            }
            {selectFood === 'Bebidas' &&
              <>
                <Select
                id='selectDrink'
                label='Seleccione Bebida'
                onChange={(e) => setSelectDrink(e.target.value)}
                options={drinks}
                type='foodName'
                />
                {
                  selectDrink &&
                  <>
                    <SelectCut
                      id='selectQuantity'
                      label='Cantidad'
                      onChange={(e) => setSelectQuantityDrink(e.target.value)}
                      options={drinks.filter(drink => drink._id === selectDrink)[0].foodQuantity}
                    />
                    { selectDrink === drinks.filter(drink => drink._id === selectDrink)[0]._id &&
                      <>
                        { selectQuantityDrink === '1' &&
                          <span>Precio: {drinks.filter(drink => drink._id === selectDrink)[0].foodPrice[0]}</span>
                        }
                        { selectQuantityDrink === '2' &&
                          <span>Precio: {(drinks.filter(drink => drink._id === selectDrink)[0].foodPrice[0]) * 2}</span>
                        }
                        { selectQuantityDrink === '3' &&
                          <span>Precio: {(drinks.filter(drink => drink._id === selectDrink)[0].foodPrice[0]) * 3}</span>
                        }
                      </>
                    }
                  </>
                }
              </>
            }
          </>
        }
      </div>
      <Button
        type='button'
        handleClick={() => setAddFood(!addFood) }
      >
        Añadir otro alimento
      </Button>
      { addFood === true &&
        <div>
          <CreateOrder
            foods={foods}
            drinks={drinks}
          />l
        </div>
      }
    </>
  )
}
