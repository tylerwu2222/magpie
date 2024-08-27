import { StyleSheet } from "react-native"
import { cardDimensions, wideCardDimensions } from "@/assets/constants/magpieDimensions"

export const listStyle = StyleSheet.create({
    card: {
        borderRadius: wideCardDimensions.borderRadius,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: wideCardDimensions.width,
        maxHeight: wideCardDimensions.height,
        margin: 5,
        overflow: 'hidden'
    }
})