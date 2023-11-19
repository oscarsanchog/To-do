module.exports = { 
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./client/tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": "off",
        "no-trailing-spaces": "off",
        //"indent": ["error"],
        'react/prop-types': 'off',
        "@typescript-eslint/explicit-function-return-type": "off"
    }
}
