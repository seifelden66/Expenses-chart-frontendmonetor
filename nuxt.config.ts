// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({



    css: ["bootstrap/dist/css/bootstrap.min.css", "/assets/styles/main.scss"],
    runtimeConfig: {
        public: {
           
        }
    },
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
              'Nunito': true,
              download: true,
              inject: true
            }
          }]
    ],

    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }
            ]
        }
    },



})
