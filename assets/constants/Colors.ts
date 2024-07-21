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
const magpie_grey_lightest = '#F9F9F9';
const magpie_grey_light = '#D9D9D9';
const magpie_grey_light_light_medium = '#CCCCCC';
const magpie_grey_light_medium = '#BABABA';
const magpie_grey_medium = '#7F7F7F';
const magpie_grey_medium_dark = '#545454';
const magpie_grey_dark = '#363636';

// logo
const magpie_logo_white = '#EFFDFE';
const magpie_logo_black = '#040710';
const magpie_logo_blue = '#106C9D';

// maps colors to functionality
export const Colors = {

  // screen themes
  lightTheme: {
    text: magpie_logo_black,
    background: magpie_logo_white,
    tint: magpie_blue,
  },
  darkTheme: {
    text: magpie_logo_white,
    background: magpie_grey_dark,
    tint: magpie_blue,
  },

  // card color themes
  lightCard: {
    background: magpie_logo_white,
    border: magpie_logo_black,
    text: magpie_grey_dark
  },

  // text color themes
  darkTextInput: {
    text: magpie_logo_black,
    placeholder: magpie_grey_medium,
    background: 'transparent'
  },
  lightTextInput: {
    text: magpie_logo_white,
    placeholder: magpie_grey_lightest,
    background: magpie_grey_medium
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
  accentBlueButton: {
    // default: magpie_blue_light_medium,
    default: 'transparent',
    ripple: magpie_blue_light,
    text: magpie_blue
  },
  favoriteButton: {
    // default: magpie_grey_light_medium,
    default: 'transparent',
    ripple: magpie_grey_medium,
    toggle: magpie_blue,
    text: magpie_blue
  },
  redAccentButton: {
    default: magpie_red_light,
    ripple: magpie_red_lightest,
    toggle: magpie_red_medium,
    text: magpie_red
  },
  deleteButton: {
    default: magpie_grey_light_medium,
    ripple: magpie_grey_medium,
    toggle: category_colors.red,
    text: category_colors.red
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
