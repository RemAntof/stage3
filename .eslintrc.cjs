module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-compiler/react-compiler': 'error',
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'no-unused-expressions': 'error',
    'no-inline-comments': 'error',
  },
  overrides: [
    {
      files: ['vite.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
