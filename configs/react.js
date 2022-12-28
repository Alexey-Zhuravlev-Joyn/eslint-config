'use strict';

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/boolean-prop-naming': 'off',
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/display-name': 'error',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-key': 'error',
        'react/jsx-max-depth': ['error', { max: 10 }],
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-newline': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'error',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-no-undef': 'error',
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-props-no-spreading': 'error',
        'react/jsx-sort-default-props': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'off',
        'react/no-access-state-in-setstate': 'error',
        'react/no-adjacent-inline-elements': 'off',
        'react/no-array-index-key': 'off',
        'react/no-children-prop': 'off',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'off',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'off',
        'react/prefer-read-only-props': 'off',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'off',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'off',
        'react/sort-comp': 'off',
        'react/sort-prop-types': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/style-prop-object': 'off',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/prefer-exact-props': 'off',
        'react/no-namespace': 'error',
        'react/no-invalid-html-attribute': 'off',
        'react/no-arrow-function-lifecycle': 'off',
        'react/no-unused-class-component-methods': 'off',
        'react/hook-use-state': 'off',
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-no-leaked-render': 'error',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    }
};
