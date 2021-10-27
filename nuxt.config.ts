import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  ssr: false,
  vite: {
    plugins: [
      vanillaExtractPlugin(),
    ]
  }
})
