module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": ["error"],
    "consistent-return": "off",
    "func-names": "off",
    "no-console": "error",
    "no-underscore-dangle": "off",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
  },
};
