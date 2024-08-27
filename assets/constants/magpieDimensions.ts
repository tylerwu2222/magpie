import { Dimensions } from "react-native";

export const magpieDimensions = {
    vh: Dimensions.get('window').height,
    vw: Dimensions.get('window').width
}

const cardWidth = magpieDimensions.vw * 0.45;
export const cardDimensions = {
    width: cardWidth,
    height: cardWidth * 1.5,
    borderRadius: 10,
    titleFontSize: 20,
    subtitleFontSize: 18,
    textFontSize: 15
}

const wideCardWidth = magpieDimensions.vw * 0.95;
export const wideCardDimensions = {
    width: wideCardWidth,
    height: 50,
    borderRadius: 10,
    titleFontSize: 20,
    subtitleFontSize: 18,
    textFontSize: 15
}

export const draggableCardShrink = 0.8;


export const navbarDimensions = {
    topNavbarHeight: 60,
    bottomNavbarHeight: 80
}

export const cornerButtonDistance = 20;
export const defaultButtonSize = 40;
export const smallerButtonSize = defaultButtonSize * 0.5;
export const largerButtonSize = defaultButtonSize * 1.5;