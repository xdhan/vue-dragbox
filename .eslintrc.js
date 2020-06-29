module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    /*
        https://eslint.vuejs.org/rules/
      */
    'vue/attributes-order': [2, {
      alphabetical: true
    }],
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/html-indent': [2, 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-closing-bracket-newline': [2, {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/component-tags-order': [2, {
      order: ['template', 'script', 'style']
    }],
    /*
        https://eslint.org/docs/user-guide/configuring#configuring-rules
        "off" or 0 - turn the rule off
        "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
        "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
        https://eslint.org/docs/rules
      */
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'as-needed'], // 为单行箭头函数的参数添加圆括号
    'comma-dangle': [2, 'never'], // 尾逗号
    indent: [2, 2, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral'] // https://github.com/babel/babel-eslint/issues/799#issuecomment-568195009
    }], // 缩进
    'linebreak-style': [2, 'unix'], // 行尾序列 LF
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }], // 对象文字括号间距
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      allowSingleLine: true
    }],
    camelcase: [0, {
      properties: 'always'
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'generator-star-spacing': [2, {
      before: true,
      after: true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      allowLoop: false,
      allowSwitch: false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      max: 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2, // 行尾空格
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      defaultAssignment: false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      initialized: 'never'
    }],
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'prefer-const': 2,
    quotes: [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }], // 引号单双
    'quote-props': [2, 'as-needed'], // 对象属性引号
    semi: [2, 'never'], // 末尾分号
    'semi-spacing': [2, {
      before: false,
      after: true
    }], // 在分号之前和之后加间距
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'], // 函数括号前空格
    'space-in-parens': [2, 'never'], // 括号内空格
    'space-infix-ops': 2, // 运算符空格
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }], // delete等 空格, ++等不空格
    'spaced-comment': [2, 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }], // 注释空格
    // 'template-curly-spacing': [2, 'never'], // 模板语法间距
    'template-curly-spacing': 0, // 模板语法间距
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

