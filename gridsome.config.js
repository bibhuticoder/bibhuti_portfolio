
module.exports = {
  siteName: 'TVC Notes',
  plugins: [
  ]
    .concat(['Blog', 'Snip', 'CS'].map(item => {
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
