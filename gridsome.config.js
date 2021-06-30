
module.exports = {
  siteName: 'Notebook',
  plugins: []
    .concat(['Blog', 'CS', 'PS', 'Tip'].map(item => {
      return {
        use: '@gridsome/vue-remark',
        options: {
          typeName: item,
          baseDir: `./content/${item.toLowerCase()}`,
          pathPrefix: `/${item.toLowerCase()}`,
          template: `./src/templates/${item}.vue`
        }
      }
    }))
}
