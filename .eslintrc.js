module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true, 
        jest: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "import"
    ],
    root: true,
    rules: {
        indent: [
            "error",
            4
        ],
        quotes: [
            "warn",
            "double"
        ],
        "import/order": [
            "warn",
            {
                alphabetize: {
                  caseInsensitive: true,
                  order: "asc"
                },
                groups: [
                  "builtin",
                  "external",
                  "index",
                  "sibling",
                  "parent",
                  "internal"
                ]
            }
        ]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};