module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", {lazyImports: true}]],
    plugins: [
      ["@babel/plugin-transform-class-properties", {loose: true}],
      ['module-resolver', {
        alias: {
          'http': 'stream-http',
          'https': 'https-browserify',
          'stream': 'readable-stream',
          'crypto': 'react-native-quick-crypto',
          'buffer': '@craftzdog/react-native-buffer',
        }
      }],
    ],
  };
};
