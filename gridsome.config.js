
module.exports = {
  siteName: 'BibhutiPoudyal',
  plugins: [
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
    })),

  // transformers: {
  //   remark: {
  //     plugins: [
  //       ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true }]
  //     ]
  //   }
  // }
}
