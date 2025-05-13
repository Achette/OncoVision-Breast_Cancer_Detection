import { AxiosRequestConfig } from 'axios'
import * as accessToken from '@/hooks/useLocalStorage'
import { requestBackend } from './requests'

export const AppServices = {
  getHistory: async () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/history?hash=${getAccessToken()}`,
      signal: AbortSignal.timeout(5000),
    }

    return requestBackend(config)
  },
}

export const getAccessToken = () => {
  return accessToken.getToken()
}
