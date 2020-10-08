export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt_laravel_auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: "http://localhost",
    credentials: true,
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: false },
          user: { url: '/api/users', method: 'get', propertyName: false },
          logout: false
        },
        tokenRequired: false,
        tokenType: false,
      }
    },
    localStorage: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
