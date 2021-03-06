module.exports = {
  root: true,
  env: { 'browser': true },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 8,
    sourceType: "module"
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'plugin:vue/recommended',
    'standard',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'vue',
    'vue-storefront',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'no-extra-parens': 2,
    /* max attributes-per-line and order-in-components
    ** we should use this later, when eslint-plugin-vue will support auto fixing this
    */
    'object-curly-spacing': ['error', 'always'],
    'vue/max-attributes-per-line': 0,
    'vue/order-in-components': 0,
    'vue/attributes-order': 0,
    'no-console': 1,
    // less restricted v-for -> v-if rules
    'vue/no-confusing-v-for-v-if': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-restricted-imports': [2, { 'paths': ['lodash-es'] }],
    'vue-storefront/no-corecomponent-import': 'error',
    'vue-storefront/no-corecomponent': 'error',
    'vue-storefront/no-corepage-import': 'error',
    'vue-storefront/no-corepage': 'error',
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0
  }
}
