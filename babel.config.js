module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", {lazyImports: true}]],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            crypto: "crypto-browserify",
          },
        },
      ],
    ],
  };
};
