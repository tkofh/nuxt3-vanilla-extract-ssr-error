import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  ssr: true,
  vite: {
    plugins: [
      vanillaExtractPlugin(),
    ]
  },
  build: {
    transpile: ['@vanilla-extract', 'outdent', '@emotion']
  }
})
