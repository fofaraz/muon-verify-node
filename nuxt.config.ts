// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // CSS file in the project
        '@/assets/bulma/css/bulma.css',
    ],
    devtools: {enabled: false},
    nitro:{
        plugins:['~/server/index.js']
    },
    ssr: false
})
