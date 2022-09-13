module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'max-len': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'vue-scoped-css/no-unused-selector': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-unused-selector': 'off',
    'vue/multi-word-component-names': 'off',
    'template-curly-spacing': 'off',
    'no-mutating-props': 'off',
    'vue/no-mutating-props': 'off',
    'vue/order-in-components': 'error',
    'prettier/prettier': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
      { argsIgnorePattern: '^_' },
    ],
  }
}
