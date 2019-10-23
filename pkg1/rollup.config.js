import babel from 'rollup-plugin-babel'

module.exports = {
  input: './src/index.js',
  output: {
    format: 'esm',
    dir: './dist',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
      presets: [['@babel/preset-env', { modules: false }]],
    }),
  ],
}
