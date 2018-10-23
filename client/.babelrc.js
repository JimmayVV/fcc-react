const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  presets: [
    ["@babel/preset-env", { modules: isTest ? "commonjs" : false }], // For now keep as commonjs no matter what, but this is how we would make a distinction between test & prod
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "react-hot-loader/babel",
    //"@babel/plugin-transform-modules-commonjs",

    "@babel/plugin-transform-async-to-generator",

    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ]
};
