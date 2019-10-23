// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  devtool: false,
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
