module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    '@heise'
  ],
  settings: {
    react: {
      version: 'detect',
    }
  },
  overrides: [
    {
      files: "*.defs.ts",
      rules: {
        "no-magic-numbers": "off"
      }
    },
    {
      'files': ['**/*.js', '**/*.mjs'],
      'env': { 'node': true },
      "extends": [
        'eslint:recommended',
      ],
      'parser': 'espree'
    }
  ]
}


