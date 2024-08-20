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