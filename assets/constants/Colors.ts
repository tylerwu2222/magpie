/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";


// categorical
const category_colors = {
  blue: '#4697FA',
  red: '#DB4020',
  green: '#4DDC55',
  orange: '#FAAA39',
  purple: '#C26CDC',
  yellow: '#F2E038',
}

// numerical gradients

// red
const magpie_red_lightest = '#f7e7e5';
const magpie_red_light = '#f6c8b9';
const magpie_red_medium_light = '#f0a48c';
const magpie_red_medium = '#e34e1c';
const magpie_red = '#a4310a';

// blue (buttons)
const magpie_blue_light = '#e2f6f8';
const magpie_blue_light_light_medium = '#CDF1F5';
const magpie_blue_light_medium = '#b6e7ee';
const magpie_blue_medium = '#88d7e5';
const magpie_blue_medium_dark = '#42bbd9';
const magpie_blue = '#0a7ea4';

// greys (buttons, text)
const magpie_white = '#fefefe';
const magpie_grey_lightest = '#fCfCfC';
const magpie_grey_lighter = '#F9F9F9';
const magpie_grey_light = '#e9e9e9';
const magpie_grey_light_light_medium = '#CCCCCC';
const magpie_grey_light_medium = '#BABABA';
const magpie_grey_medium = '#7F7F7F';
const magpie_grey_medium_dark = '#545454';
const magpie_grey_dark = '#363636';
const magpie_grey_darker = '#161616';

// logo
const magpie_logo_white = '#EFFDFE';
const magpie_logo_black = '#040710';
const magpie_logo_blue = '#106C9D';

// maps colors to functionality
export const Colors = {
  // screen themes
  lightTheme: {
    text: magpie_logo_black,
    background: magpie_grey_lighter,
    darkBackground: magpie_grey_light,
    lightBackground: magpie_grey_lightest,
    tint: magpie_blue,
    textInput: {
      text: magpie_logo_black,
      placeholder: magpie_grey_medium_dark,
      background: magpie_grey_lightest
    },
    transparentTextInput: {
      text: magpie_logo_black,
      placeholder: magpie_grey_medium_dark,
      background: 'transparent'
    }
  },
  darkTheme: {
    text: magpie_logo_white,
    background: magpie_grey_dark,
    tint: magpie_blue,
    textInput: {
      text: magpie_grey_lightest,
      placeholder: magpie_grey_light,
      background: magpie_grey_dark
    },
    transparentTextInput: {
      text: magpie_grey_lightest,
      placeholder: magpie_grey_light,
      background: 'transparent'
    }
  },
  // card color themes
  lightCard: {
    background: magpie_blue_light_medium,
    border: magpie_grey_darker,
    text: magpie_grey_dark
  },
  lightCardDelete: {
    background: magpie_red_light,
    border: magpie_red,
    text: magpie_grey_dark
  },
  lightCardDisabled: {
    background: magpie_grey_medium,
    border: magpie_grey_darker,
    text: magpie_grey_medium_dark
  },

  // button color themes
  transparentButton: {
    default: 'transparent',
    ripple: 'transparent',
    toggle: 'transparent',
    text: magpie_logo_black
  },
  darkButton: {
    default: magpie_grey_dark,
    ripple: magpie_grey_medium_dark,
    toggle: magpie_grey_medium,
    text: magpie_logo_white
  },
  lightButton: {
    default: magpie_grey_light_light_medium,
    ripple: magpie_grey_lightest,
    toggle: magpie_grey_light_medium,
    text: magpie_logo_black
  },
  lighterButton: {
    default: magpie_grey_lightest,
    ripple: magpie_grey_lightest,
    toggle: magpie_grey_light_medium,
    text: magpie_logo_black
  },
  accentBlueContentButton: {
    // default: magpie_blue_light_medium,
    default: 'transparent',
    ripple: magpie_grey_medium,
    text: magpie_grey_dark
  },
  accentBlueButtonFilled: {
    default: magpie_blue_medium,
    // default: 'transparent',
    ripple: magpie_blue_light_medium,
    text: magpie_grey_dark
  },
  darkGreyContentButton: {
    // default: magpie_grey_light_medium,
    default: 'transparent',
    ripple: magpie_grey_light,
    toggle: magpie_grey_dark,
    text: magpie_grey_dark
  },
  darkGreyButtonFilled: {
    // default: magpie_grey_light_medium,
    default: magpie_grey_dark,
    ripple: magpie_grey_medium_dark,
    toggle: magpie_blue_light,
    text: magpie_white
  },
  redAccentButton: {
    default: magpie_red_light,
    ripple: magpie_red_lightest,
    toggle: magpie_red_medium,
    text: magpie_red
  },
  deleteButton: {
    default: 'transparent',
    ripple: magpie_red_medium,
    toggle: magpie_red,
    text: magpie_red
  },
  deleteButtonFilled: {
    default: magpie_red,
    ripple: magpie_red_medium,
    toggle: magpie_red_light,
    text: magpie_white
  },
  indicatorIcon: {
    icon: magpie_blue_medium_dark,
    background: 'transparent'
  },

  redText: category_colors.red,

  categories: {
    blue: category_colors.blue,
    red: category_colors.red,
    green: category_colors.green,
    orange: category_colors.orange,
    purple: category_colors.purple,
  }
};
