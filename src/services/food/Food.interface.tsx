import { UUID } from "crypto";

export interface Food {
  id: UUID
  name: string
  carbs: number
  protein: number
  fats: number
  calories: number
  modified: string
  status: number
  activate_date: string
  deactivate_date: string | null
}