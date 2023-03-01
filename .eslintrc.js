module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'standard-with-typescript',
    'airbnb/hooks'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['import', 'react', '@typescript-eslint', 'react-hooks'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        alwaysTryTypes: true,
        project: 'tsconfig.json'
      }
    },
    alias: {
      map: [
        ['api', './src/api'],
        ['components', './src/components'],
        ['HOCs', './src/HOCs'],
        ['pages', './src/pages'],
        ['utils', './src/utils'],
        ['constants', './src/constants'],
        ['types', './src/types'],
        ['store', './src/store'],
        ['theme', './src/theme/index'],
        ['styled', './src/styled']
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  },
  rules: {
    '@typescript-eslint/semi': 0,
    semi: ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/prefer-default-export': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    '@typescript-eslint/consistent-type-imports': 0,
    'linebreak-style': 0,
    'import/no-cycle': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi', // 'none' or 'semi' or 'comma'
        requireLast: true
      }
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index'
        ],
        pathGroups: [
          {
            pattern: 'api/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'pages/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'components/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'HOCs/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'store/**',
            group: 'internal'
          },
          {
            pattern: 'utils/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'types/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'assets/**',
            group: 'internal'
          },
          {
            pattern: './components/**',
            group: 'sibling',
            position: 'after'
          },
          {
            pattern: './interfaces/**',
            group: 'sibling',
            position: 'after'
          },
          {
            pattern: 'styled',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: './styled/**',
            group: 'sibling',
            position: 'after'
          }
        ]
      }
    ]
  }
};
