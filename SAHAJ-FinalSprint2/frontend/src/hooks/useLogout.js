import { useAuthContext } from './useAuthContext'
import { useCoursesContext } from './useCoursesContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchCourses } = useCoursesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('indiv')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchCourses({ type: 'SET_Courses', payload: null })
  }

  return { logout }
}