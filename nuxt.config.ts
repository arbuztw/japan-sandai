// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/type'

export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: ['@nuxt/typescript-build'],
})
