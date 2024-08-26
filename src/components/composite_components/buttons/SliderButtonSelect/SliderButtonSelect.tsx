import { Pressable, StyleSheet, View, ScrollView } from 'react-native';

// animation and gesture
import { MotiView } from 'moti';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import React, { ReactElement, useState, useRef, useEffect } from 'react'
import { Colors } from '@/assets/constants/Colors';

interface SliderButtonSelectProps {
  iconList: Array<ReactElement> | [],
  // iconList: Array<Element>,
  // numberIconsShown: number,
  iconHeight: number,
  iconPadding: number,
  iconBorderRadius: number,
  sliderBackgroundColor: string,
  iconBackgroundColor: string,
  openDirection: 'up' | 'down'
  fade: boolean
};



// create a rounded scrollview/modal for selecting a icon
const SliderButtonSelect = ({
  iconList = [],
  // numberIconsShown = 3,
  iconHeight = 40,
  iconPadding = 10,
  iconBorderRadius = 20,
  sliderBackgroundColor = 'white',
  iconBackgroundColor = Colors.accentBlueButton.ripple,
  openDirection = 'up',
  fade = true
}: Partial<SliderButtonSelectProps>) => {

  const trueIconHeight = iconHeight + iconPadding * 2;
  const listViewHeight = iconList.length * trueIconHeight;
  const paddedListViewHeight = iconList.length * trueIconHeight + iconPadding;
  const sliderAnimateDuration = iconList.length * 100;

  const styles = StyleSheet.create({
    sliderButtonSelectView: {
      // position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      paddingHorizontal: iconPadding / 2,
      paddingVertical: iconPadding / 2,
      borderRadius: iconBorderRadius,
      overflow: 'hidden',
      backgroundColor: sliderBackgroundColor
    },
    iconListView: {
      // flexDirection: 'column-reverse',
      // flexDirection: 'column',
      // alignItems: 'flex-end'
    },
    iconView: {
      borderRadius: iconBorderRadius
    },
    highlightedIconView: {
      backgroundColor: iconBackgroundColor
    }
  })

  const [sliderOpen, setSliderOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<ReactElement | null>(null);
  const [dynamicIconList, setDynamicIconList] = useState(iconList);

  // moves element in index
  const moveToFront = (arr: Array<ReactElement>, index: number) => {
    if (index >= arr.length || index < 0) {
      return arr;
    }
    const indexToEnd = arr.slice(index);
    const startToIndex = arr.slice(0, index);
    return [...indexToEnd, ...startToIndex];
  }
  const moveToEnd = (arr: Array<ReactElement>, index: number) => {
    if (index >= arr.length || index < 0) {
      return arr;
    }
    // move 0 to index, inclusive of index
    const indexToEnd = arr.slice(index + 1);
    const startToIndex = arr.slice(0, index + 1);
    return [...indexToEnd, ...startToIndex];
  }

  const handleSliderOpen = () => {
    setSliderOpen(true);
  }

  const handleSliderClose = () => {
    setSliderOpen(false)
    setHighlightedIndex(null);
  }

  const pan = Gesture.Pan()
    // .onBegin(() => handleSliderOpen())
    .onUpdate((event) => {
      // update highlighted index
      const sliderOffset = (iconList.length + 2.5) * iconHeight / 2;
      // translated amount (in pixels) / height of icon with padding (in pixels)
      const closestIndex = Math.floor((event.translationY + sliderOffset + iconHeight) / trueIconHeight);
      // console.log('closest',closestIndex);
      // only update if within range
      if (closestIndex >= 0 && closestIndex < iconList.length) {
        setHighlightedIndex(closestIndex);
      }

    })
    .onEnd(() => {
      // set the selected icon once user releases pan
      if (highlightedIndex !== null) {
        setSelectedIcon(dynamicIconList[highlightedIndex]);
        // reorder icon list, so selected icon is first
        if (openDirection == 'up') {
          setDynamicIconList(moveToEnd(dynamicIconList, highlightedIndex));
        }
        else if (openDirection == 'down') {
          setDynamicIconList(moveToFront(dynamicIconList, highlightedIndex));
        }
      }
      // handleSliderClose();
    });
  ;

  // animate slider view, and also translate Y, so slider u=opens upwards
  return (
    <GestureDetector gesture={pan}>
      {/* outer panel */}
      <MotiView
        style={styles.sliderButtonSelectView}
        animate={{
          height: sliderOpen ?
            paddedListViewHeight : //
            trueIconHeight + iconPadding,
          translateY: openDirection == 'up' ? (sliderOpen ? -(iconList.length * iconHeight / 2 + iconPadding) : 0) :
            (sliderOpen ? (iconList.length * iconHeight / 2 + iconPadding) : 0)
        }}
        transition={{
          type: 'timing',
          duration: sliderAnimateDuration,
          // delay: sliderOpen ? 100 : 0, // Add delay when opening the slider
        }}
      >
        <Pressable
          onPressIn={handleSliderOpen}
          onPressOut={handleSliderClose}
        >
          {/* icon lists */}
          <MotiView style={styles.iconListView}
            animate={{
              translateY: openDirection == 'up' ? (sliderOpen ? 0 : -((iconList.length - 1) * (trueIconHeight))) :
                (sliderOpen ? 0 : (iconList.length - 1) * (trueIconHeight))
            }}
            transition={{
              type: 'timing',
              duration: sliderAnimateDuration,
              // delay: sliderOpen ? 100 : 0, // Add delay when opening the slider
            }}
          >
            {dynamicIconList.map((icon, index) => {
              return <View key={index} style={[index == highlightedIndex ? styles.highlightedIconView : null, styles.iconView]}>
                {icon}
              </View>
            }
            )}
          </MotiView>
        </Pressable>
      </MotiView>
    </GestureDetector>
  )
}

export default SliderButtonSelect;
