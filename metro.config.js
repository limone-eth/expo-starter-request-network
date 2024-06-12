// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const extraNodeModules = require("node-libs-browser");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = extraNodeModules;

const path = require('path');
config.resolver.extraNodeModules.crypto = path.resolve(__dirname, 'shim.js');

config.resolver.sourceExts.push("cjs");

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
