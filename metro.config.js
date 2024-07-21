// const { getDefaultConfig } = require("expo/metro-config");

// module.exports = (async () => {
//   let defaultConfig = await getDefaultConfig(__dirname);
//   defaultConfig.resolver.resolverMainFields.unshift("sbmodern");
//   return defaultConfig;
// })();

// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

if(process.env.STORYBOOK){
  config.resolver.resolverMainFields.unshift('sbmodern');
}

const { generate } = require('@storybook/react-native/scripts/generate');

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push('mjs');

module.exports = config;
