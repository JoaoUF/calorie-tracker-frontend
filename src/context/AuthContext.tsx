import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode"
import { Outlet, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TokenService } from '../services/token/Token.service';

interface ContexData {
  user: any,
  loginUser: (data: any) => Promise<void>,
  logoutUser: () => void,
}

const AuthContext = createContext<ContexData | null>(null) as React.Context<ContexData>

export default AuthContext;

export const AuthProvider = () => {
  let { authTokens, setValue } = useLocalStorage()
  let [user, setUser] = useState(() => authTokens ? jwtDecode(authTokens.access) : null)
  let [loading, setLoading] = useState(false)

  const history = useNavigate()

  let loginUser = async (data: any) => {
    try {
      const tokenService = new TokenService()
      const tokenoutput = await tokenService.getTokens(data)
      setValue(tokenoutput)
      setUser(jwtDecode(tokenoutput.access))
      history('/main')
    } catch {
      alert('Something went wrong!')
    }
  }

  let logoutUser = () => {
    setValue(null)
    setUser(null)
    history('/')
  }

  let updateToken = async () => {
    try {
      const tokenService = new TokenService()
      const tokenoutput = await tokenService.refreshTokens(authTokens?.refresh!)
      setValue(tokenoutput)
      setUser(jwtDecode(tokenoutput.access))
    } catch (error) {
      console.log(error)
      logoutUser()
    }

    if (loading) {
      setLoading(false)
    }
  }

  let contextData: ContexData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  useEffect(() => {

    if (loading) {
      updateToken()
    }

    let fourMinutes = 1000 * 60 * 4

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken()
      }
    }, fourMinutes)
    return () => clearInterval(interval)

  }, [authTokens, loading])

  return (
    <AuthContext.Provider value={contextData} >
      {loading ? null : <Outlet />}
    </AuthContext.Provider>
  )
}