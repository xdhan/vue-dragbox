import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/dragbox.js',
    format: 'umd',
    name: 'dragbox'
  },
  plugins: [
    resolve(), // 这样 Rollup 能找到 `ms`
    commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
    eslint(),
    babel(),
    terser(),
    vue()
  ]
}
