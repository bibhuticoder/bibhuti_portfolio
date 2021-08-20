
module.exports = {
  siteName: 'BibhutiPoudyal',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    }
  ]
    .concat(['Blog', 'Snip'].map(item => {
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
          ],
        }
      }
    }))
}
