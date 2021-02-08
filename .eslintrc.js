module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/flowtype',
        'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'jest'],
    rules: {
        'react/prop-types': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
    },
};
