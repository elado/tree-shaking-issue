// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  optimization: {
    usedExports: true,
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       pure_getters: true
    //     },
    //   }),
    // ],
  },
}
