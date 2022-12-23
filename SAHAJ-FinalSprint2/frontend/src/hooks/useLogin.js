import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (Email, Password, UserType) => {
    setIsLoading(true)
    setError(null)

    console.log("Email:  " + Email)
    console.log("Pass: "+ Password)
    console.log("Type: "+ UserType)

    const response = await fetch('/api/indiv/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ Email, Password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      alert(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem(UserType, JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN' , payload: json , UserType:UserType})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}