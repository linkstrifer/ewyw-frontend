import React from 'react'
import axios from 'axios'
import FormInputs from '../formInputs'
import Button from '../Button'
import { changeEmail, changePassword, changeError } from '../../store/singInReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


export default function SignInForm(){

  const history = useHistory()

  const {
    email,
    password,
    error} = useSelector(({ signInReducer }) => ({
    email: signInReducer.email,
    password: signInReducer.password,
    error: signInReducer.error,
    }))

    async function handleSubmit(e){
      e.preventDefault()

      try {
        const { data } = await axios({
          method: 'POST',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/users/signin',
          data: {
            email,
            password,
          }
        })

        localStorage.setItem('token', data.token)
        localStorage.setItem('userKind', data.userKind)
        history.push('/clientprofile')

      } catch(error){
        dispatch(changeError(error.message))
      }
    }


  const dispatch = useDispatch()

  return (
    <form onSubmit={handleSubmit}>
      <FormInputs
        id='email'
        type='email'
        name='email'
        onChange={e => dispatch(changeEmail(e.target.value))}
        value={email}
      >
        Email
      </FormInputs>
      <FormInputs
        id='password'
        type='password'
        name='password'
        onChange={e => dispatch(changePassword(e.target.value))}
        value={password}
      >
        Contraseña
      </FormInputs>
      {error && <p> {error} </p>}
      <Button
        type='submit'
      >
        Iniciar sesion
      </Button>
    </form>
  )
}