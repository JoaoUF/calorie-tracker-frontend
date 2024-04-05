import { AxiosResponse } from 'axios'
import AxiosConfig from '../AxiosConfig'
import { UUID } from 'crypto'
import { Consume } from './Consume.interface'

export class ConsumeService {
  getAllProducts(): Promise<Consume[]> {
    return AxiosConfig.get(`product/`)
      .then((response: AxiosResponse<Consume[]>) => response.data)
  }

  createProduct(data: any): Promise<Consume> {
    return AxiosConfig.post('product/', data)
      .then((response: AxiosResponse<Consume>) => response.data)
  }

  getOneProduct(pk: UUID): Promise<Consume> {
    return AxiosConfig.get(`product/${pk}/`)
      .then((response: AxiosResponse<Consume>) => response.data)
  }

  updateProduct(pk: UUID, data: any): Promise<Consume> {
    return AxiosConfig.put(`product/${pk}/`, data)
      .then((response: AxiosResponse<Consume>) => response.data)
  }

  deleteProduct(pk: UUID) {
    return AxiosConfig.delete(`product/${pk}/`)
      .then((response: AxiosResponse<Consume>) => response.status)
  }
}