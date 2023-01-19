export interface BaseResponse<T = {}> {
  data: T
  message: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export type SeverityType = 'error' | 'success' | 'info' | 'warning'
