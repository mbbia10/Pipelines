import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    env: {
      node: true,
      jest: true
    },
    rules: {
      "no-console": "off"
    }
  }
];
