module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'airbnb-base'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    rules: {
        'vue/array-bracket-spacing': 'error',
        // semi: [2, 'never'], // set ;
        'no-tabs': 0,
        indent: [2],
        'comma-dangle': ['error', {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        'object-curly-spacing': ['error', 'always', {
            objectsInObjects: true
        }],
        'import/no-unresolved': 'off',
        'no-param-reassign': 'off', // for vuex
        strict: 0,
        'no-plusplus': 0
    }
};