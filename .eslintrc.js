module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        "prettier",
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'frontpro-eslint-plugin',
        'unused-imports',
    ], 
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: [
                'data-testid',
                'target',
                'to',
                'direction',
                'align',
                'justify',
                'gap',
                'role',
                'as',
                'border',
            ],
        }],
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
        }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'arrow-body-style': 'off',
        'frontpro-eslint-plugin/path-checker': ['error', { alias: '@' }],
        'frontpro-eslint-plugin/public-api-imports': [
            'error', {
                alias: '@',
                testFilesPatterns: ['**/*.test.ts', '**/*.test.ts', '**/StoreDecorator.tsx'],
            }],
        'frontpro-eslint-plugin/layer-imports': [
            'error', {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            }],
        'unused-imports/no-unused-imports': 'error',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{stories,test,mock}.{tsx,ts}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
            'react/jsx-props-no-spreading': 'off',
        },
    }],
};
