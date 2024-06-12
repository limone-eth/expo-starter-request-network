module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", {lazyImports: true}]],
    plugins: [
      [
        "babel-plugin-rewrite-require",
        {
          aliases: {
            crypto: "crypto-browserify",
          },
        },
      ],
    ],
  };
};
