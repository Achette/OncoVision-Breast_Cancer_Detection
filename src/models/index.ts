export interface LoginResponse {
  hash: string
  message: string
}

interface InputData {
  mean_area: number
  mean_perimeter: number
  mean_radius: number
  mean_smoothness: number
  mean_texture: number
}

export interface HistoryItem {
  input: InputData
  prediction: number
}

export interface HistoryPayload {
  history: HistoryItem[]
}

export interface PredictDataState {
  mean_area: string
  mean_perimeter: string 
  mean_radius: string 
  mean_smoothness: string 
  mean_texture: string 
}

export interface PredictData {
  mean_area: number 
  mean_perimeter: number 
  mean_radius: number 
  mean_smoothness: number 
  mean_texture: number 
}

export interface PredictResult {
  prediction: string | null
}
