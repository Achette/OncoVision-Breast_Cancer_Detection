import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#e84c88' },
        primaryLight: { value: '#f7dae6' },
        primaryDark: { value: '#c23a6b' },
        secondary: { value: '#4a5568' },
        light: { value: '#f5f7fa' },
        dark: { value: '#2d3748' },
        success: { value: '#48bb78' },
        warning: { value: '#ed8936' },
        error: { value: '#e53e3e' },
      },
      fonts: {
        body: { value: 'Rubik, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
