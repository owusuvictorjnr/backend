module.exports = {
  env: {
    es2016: true,
    node: true,
  },

  extends: ['eslint: recomended', 'plugin:@typescript-eslint/recommed'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'es2016',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
};
