'use client'
import { TOKEN_KEY, USER_KEY } from '@/constants/system'

/* 
    HASH
*/
export const saveToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token)
  }
}

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY)
  }
  return null
}

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY)
  }
}

/*
    USER
*/

export const saveUser = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, token)
  }
}

export const getUser = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(USER_KEY)
  }
  return null
}

export const removeUser = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_KEY)
  }
}
