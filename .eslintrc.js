// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   root: true,
//   extends: [
//     "react-app",
//     "standard-with-typescript",
//     "plugin:react/recommended",
//   ],
//   overrides: [
//     {
//       env: {
//         node: 1,
//       },
//       files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
//       extends: "standard-with-typescript",
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react"],
//   rules: {
//     "react/jsx-indent": [2, 4],
//     indent: "off",
//     "react/jsx-filename-extension": [
//       2,
//       { extensions: [".js", ".jsx", ".tsx"] },
//       { quotes: [2, "single", { avoidEscape: true }] },
//       {
//         "prettier/prettier": [
//           "warn",
//           {
//             singleQuote: true,
//             semi: true,
//           },
//         ],
//       },
//     ],
//     "react/function-component-definition": [
//       2,
//       {
//         namedComponents: "function-declaration",
//       },
//     ],
//     "@typescript-eslint/restrict-plus-operands": "off",
//     "prettier/prettier": ["error", { singleQuote: true }],
//     "react/jsx-filename-extension": [
//       1,
//       {
//         extensions: [".tsx"],
//       },
//     ],
//     "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
//     "import/no-unresolved": "off",
//     "import/prefer-default-export": "off",
//     "no-unused-vars": "warn",
//     "react/require-default-props": "off",
//     "react/react-in-jsx-scope": "off",
//     "react/jsx-props-no-spreading": "warn",
//     "react/function-component-definition": "off",
//     "no-shadow": "off",
//     "import/extensions": "off",
//     "import/no-extraneous-dependencies": "off",
//     "no-underscore-dangle": "off",
//     "import/prefer-default-export": "off",
//     "object-curly-spacing": [2, "always"],
//   },
// };

//
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'react-app',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'i18next'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true }],
        'no-tabs': ['error', { allowIndentationTabs: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
