import { useEffect, useState } from 'react'
import { Token } from '../services/token/Token.interface'

export const useLocalStorage = () => {
  const [authTokens, setAuthTokens] = useState<Token | null>(() => {
    try {
      const getCard = window.localStorage.getItem('authTokens')
      return getCard ? JSON.parse(getCard) as Token : null
    } catch (error) {
      console.log('error while reciving the tokens')
      return null
    }
  })

  const setValue = (token: Token) => {
    setAuthTokens(token)
    window.localStorage.setItem('authTokens', JSON.stringify(token))
  }

  const deleteValue = () => {
    setAuthTokens(null)
    window.localStorage.removeItem('authTokens')
  }

  return { authTokens, setValue, deleteValue }
}