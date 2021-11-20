import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  ssr: true,
  vite: {
    plugins: [
      vanillaExtractPlugin(),
    ]
  },
  watch: ['styles.css.ts'],
  build: {
    transpile: ['@vanilla-extract', 'outdent', '@emotion'],
  }
})
