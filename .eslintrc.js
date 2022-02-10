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
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        requireConfigFile: false,
        sourceType: "module"
    },
    plugins: [
        "import"
    ],
    root: true,
    rules: {
        
        "import/order": [
            "warn",
            {
                
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