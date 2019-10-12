
module.exports = {
  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  globals: {
    __DEV__: true,
    expect: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'react'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        // allow underscore prefixed variables as unused
        argsIgnorePattern: '^_',
      },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
