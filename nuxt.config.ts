// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'https://api-forklift.code95.info',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#CE190A',
            secondary: '#282830', 
          }
        },
        fontFamily: {
          inter: ["'Inter'", "sans-serif"],
          roboto: ["'Roboto'", "sans-serif"],
        },
        boxShadow: {
          subtle: '0 0 4px rgba(0, 0, 0, 0.25)', 
        }
      }
    }
  },
  image: {
    quality: 80,
    format: ['webp', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
})