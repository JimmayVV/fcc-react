const OFF = 0, WARN = 1, ERROR = 2;
module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false,
    "ecmaFeatures": {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true
     }
  },
  "plugins": ["react", "prettier"],
  "env": {
    "es6": true,
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": [WARN, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": [OFF],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
      }
    ],
  }
};