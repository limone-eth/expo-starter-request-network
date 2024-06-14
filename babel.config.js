module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", {lazyImports: true}]],
    plugins: [
      ["@babel/plugin-transform-class-properties", {loose: true}],
      ['module-resolver', {
        alias: {
          'http': '@tradle/react-native-http',
          'https': 'react-native-https',
          'stream': 'readable-stream',
          'crypto': 'crypto-browserify',
        }
      }],
    ],
  };
};
