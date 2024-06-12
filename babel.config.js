module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", {lazyImports: true}]],
    plugins: [
      ["@babel/plugin-transform-class-properties", {loose: true}],
      ['module-resolver', {
        alias: {
          'http': 'stream-http',
          'https': 'stream-http', // stream-http can handle both http and https
          'stream': 'readable-stream',
          'crypto': 'crypto-browserify',
        }
      }],
    ],
  };
};
