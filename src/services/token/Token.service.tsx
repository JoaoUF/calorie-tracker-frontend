import { AxiosResponse } from 'axios'
import AxiosConfig from '../AxiosConfig'
import { Token } from './Token.interface'

export class TokenService {
  getTokens(data: any): Promise<Token> {
    return AxiosConfig.post('token/', data)
      .then((response: AxiosResponse<Token>) => response.data)
  }

  refreshTokens(refresh: string): Promise<Token> {
    return AxiosConfig.post('token/refresh/', {
      refresh: refresh
    }).then((response: AxiosResponse<Token>) => response.data)
  }
}