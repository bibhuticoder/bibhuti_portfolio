
module.exports = {
  siteName: 'BibhutiPoudyal',
  siteUrl: "https://bibhutipoudyal.com.np",
  siteDescription: "This site is a journal; mostly related to work and open source projects; kept as a self reference for myself and other fellow developers interested.",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // exclude: ['/']
      }
    },

    'gridsome-plugin-robots-txt'

    // Add plugins here ^
  ]
    .concat(['Blog', 'Snip', 'Hack'].map(item => {
      return {
        use: '@gridsome/vue-remark',
        options: {
          typeName: item,
          baseDir: `./content/${item.toLowerCase()}`,
          pathPrefix: `/${item.toLowerCase()}`,
          template: `./src/templates/${item}.vue`,
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'nord', skipInline: true },
            ],

            ['@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders': [
                'Youtube',
                'Gist',
                'Codepen',
                'JSFiddle'
              ],
              'Gist': {
                secureConnection: true
              }
            }]
          ],
        }
      }
    }))
}
