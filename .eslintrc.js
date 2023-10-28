module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'StyleSheet' }],
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'unused-imports',
    'import',
    'react-hooks',
    'eslint-plugin-import',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'react-native/no-unused-styles': 'off',
    'import/no-unused-modules': 'error',
    'no-console': 'warn',
    'no-undef': 'off',
    'arrow-body-style': ['off'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        'no-inline-styles': false,
      },
    ],
  },
};
