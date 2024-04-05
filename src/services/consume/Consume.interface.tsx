import { UUID } from "crypto";

export interface Consume {
  id: UUID
  user: number
  food: UUID
}