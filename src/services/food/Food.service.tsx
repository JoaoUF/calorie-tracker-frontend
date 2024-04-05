import { AxiosResponse } from 'axios'
import AxiosConfig from '../AxiosConfig'
import { UUID } from 'crypto'
import { Food } from './Food.interface'

export class FoodService {
  getAllProducts(): Promise<Food[]> {
    return AxiosConfig.get(`product/`)
      .then((response: AxiosResponse<Food[]>) => response.data)
  }

  createProduct(data: any): Promise<Food> {
    return AxiosConfig.post('product/', data)
      .then((response: AxiosResponse<Food>) => response.data)
  }

  getOneProduct(pk: UUID): Promise<Food> {
    return AxiosConfig.get(`product/${pk}/`)
      .then((response: AxiosResponse<Food>) => response.data)
  }

  updateProduct(pk: UUID, data: any): Promise<Food> {
    return AxiosConfig.put(`product/${pk}/`, data)
      .then((response: AxiosResponse<Food>) => response.data)
  }

  deleteProduct(pk: UUID) {
    return AxiosConfig.delete(`product/${pk}/`)
      .then((response: AxiosResponse<Food>) => response.status)
  }
}