import { ExpoConfig, ConfigContext } from 'expo/config';

// console.log('STORYBOOK in app config:', process.env.STORYBOOK);

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'magpie',
  slug: 'magpie',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  scheme: 'my-app-scheme',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff'
    }
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: './assets/favicon.png'
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK,
    router: {
      origin: false
    }
  },
  plugins: [
    "expo-router"
  ],
  experiments: {
    "typedRoutes": true
  }
});