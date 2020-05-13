// yarn add eslint
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true // 'require'/... is not defined.eslint(no-undef)
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
    // 使用 eslint 规则替换 https://itnext.io/how-to-replace-prettier-by-eslint-rules-21574359e041
    // "@vue/prettier",
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // eslint:recommended:
    // 'max-len': ['error', { 'code': 80 }],
    indent: ['error', 2], // 缩进
    semi: ['error', 'never'], // 末尾分号
    quotes: ['error', 'single'], // 引号单双
    'comma-dangle': ['error', 'never'], // 尾逗号
    'object-curly-spacing': ['error', 'always'], // 对象文字括号间距
    'linebreak-style': ['error', 'unix'], // 行尾序列 LF
    'arrow-parens': ['error', 'as-needed'], // 为单行箭头函数的参数添加圆括号
    'keyword-spacing': ['error', { 'before': true }],
    'space-before-function-paren': ['error', 'always'],
    // vue/recommended:
    'vue/attributes-order': ['error', {
      alphabetical: true 
    }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'] 
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
