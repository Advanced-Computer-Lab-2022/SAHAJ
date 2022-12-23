import { createContext, useReducer, useEffect, useState } from 'react'

export const AuthContext = createContext()


export const authReducer = (state, action) => {
console.log(action.UserType)

  // switch (action.type) {
  //   case 'LOGIN':
  //     return { type: action.payload }
  //   case 'LOGOUT':
  //     return { type: null }
  //   default:
  //     return state
  // }

  if(action.type === 'LOGIN'){
    if(action.UserType === 'indiv'){
      return { indiv: action.payload }
    }
    else if(action.UserType === 'coorp'){
      return { coorp: action.payload }
    }
    else{
      return { instructor: action.payload }
    }
  }
  else if(action.type === 'LOGOUT'){
    if(action.UserType === 'indiv'){
      return { indiv: null }
    }
    else if(action.UserType === 'coorp'){
      return { coorp: null }
    }
    else{
      return { instructor: null }
    }
  }
  else{
    return state
  }
}

export const AuthContextProvider = ({ children }) => {
  console.log(children)
  const [state, dispatch] = useReducer(authReducer, { UserType: null })
  const xtype = Object.keys(state)[0]
  console.log(xtype)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(xtype))

    if (user) {
      dispatch({ type: 'LOGIN', payload: xtype }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}