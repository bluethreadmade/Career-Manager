import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["client/src/**/*.js", "client/src/**/*.jsx", "server/**/*.js"], // ✅ Ensure files are included
    languageOptions: {
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react, // ✅ Correct way to define plugins in Flat Config
    },
    rules: {
      ...react.configs.recommended.rules, // ✅ Apply React rules correctly
      "react/react-in-jsx-scope": "off", // ✅ Not needed in modern React
    },
    settings: {
      react: { version: "detect" }, // ✅ Auto-detect React version
    },
  },
];
