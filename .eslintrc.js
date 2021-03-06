module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    'linebreak-style': 0,
    'vuejs-accessibility/label-has-for': 0,
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
