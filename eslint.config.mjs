import js from "@eslint/js";
import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "build/**",
      "coverage/**",
      "node_modules/**",
      "src/assests/font-awesome/js/**",
    ],
  },
  {
    files: ["src/**/*.{js,jsx}"],
    ...js.configs.recommended,
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "jsx-a11y": jsxA11y,
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "16.14",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": [
        "warn",
        {
          args: "none",
          ignoreRestSiblings: true,
        },
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          aspects: ["noHref", "invalidHref"],
        },
      ],
      "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-role": [
        "warn",
        {
          ignoreNonDOM: true,
        },
      ],
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/heading-has-content": "warn",
      "jsx-a11y/iframe-has-title": "warn",
      "jsx-a11y/img-redundant-alt": "warn",
      "jsx-a11y/no-access-key": "warn",
      "jsx-a11y/no-distracting-elements": "warn",
      "jsx-a11y/no-redundant-roles": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "jsx-a11y/scope": "warn",
      "react/forbid-foreign-prop-types": [
        "warn",
        {
          allowInPropTypes: true,
        },
      ],
      "react/jsx-no-comment-textnodes": "warn",
      "react/jsx-no-duplicate-props": "warn",
      "react/jsx-key": "error",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react/jsx-pascal-case": [
        "warn",
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      "react/no-danger-with-children": "warn",
      "react/no-direct-mutation-state": "warn",
      "react/no-is-mounted": "warn",
      "react/no-unknown-property": "error",
      "react/no-typos": "error",
      "react/require-render-return": "error",
      "react/style-prop-object": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    files: ["src/**/*.test.{js,jsx}"],
    languageOptions: {
      globals: {
        it: "readonly",
      },
    },
  },
];
