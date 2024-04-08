import { AxiosResponse } from 'axios'
import AxiosConfig from '../AxiosConfig'
import { UUID } from 'crypto'
import { Consume } from './Consume.interface'

export class ConsumeService {
  getAllProducts(): Promise<Consume[]> {
    return AxiosConfig.get(`consume/`)
      .then((response: AxiosResponse<Consume[]>) => response.data)
  }

  createProduct(data: any): Promise<Consume> {
    return AxiosConfig.post('consume/', data)
      .then((response: AxiosResponse<Consume>) => response.data)
  }

  getOneProduct(pk: UUID): Promise<Consume> {
    return AxiosConfig.get(`consume/${pk}/`)
      .then((response: AxiosResponse<Consume>) => response.data)
  }

  updateProduct(pk: UUID, data: any): Promise<Consume> {
    return AxiosConfig.put(`consume/${pk}/`, data)
      .then((response: AxiosResponse<Consume>) => response.data)
  }

  deleteProduct(pk: UUID) {
    return AxiosConfig.delete(`consume/${pk}/`)
      .then((response: AxiosResponse<Consume>) => response.status)
  }
}