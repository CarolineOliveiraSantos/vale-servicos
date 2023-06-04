module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['@rocketseat/eslint-config/react'],
  overrides: [],
  plugins: ['import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
}
