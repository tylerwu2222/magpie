import { StyleSheet, View } from 'react-native';
import { runOnJS } from 'react-native-reanimated';
// animation and gesture
import { MotiView } from 'moti';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import React, { cloneElement, ReactElement, useState } from 'react'
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
  fade: boolean,

  iconChangeFn: (arg0: any) => void
};



// create a rounded scrollview/modal for selecting a icon
const SliderButtonSelect = ({
  iconList = [],
  // numberIconsShown = 3,
  iconHeight = 40,
  iconPadding = 10,
  iconBorderRadius = 40,
  sliderBackgroundColor = 'white',
  iconBackgroundColor = Colors.darkGreyContentButton.ripple,
  openDirection = 'up',
  fade = true,
  iconChangeFn = (selectedIcon) => { }
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
    iconView: {
      borderRadius: iconBorderRadius
    },
    highlightedIconView: {
      backgroundColor: iconBackgroundColor
    }
  })

  const [sliderOpen, setSliderOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [dynamicIconList, setDynamicIconList] = useState(iconList);

  // moves element in index
  const moveToFront = (arr: Array<ReactElement>, index: number) => {
    const arrCopy = [...arr];
    if (index < arrCopy.length && index >= 0) {
      const indexToEnd = arrCopy.slice(index);
      const startToIndex = arrCopy.slice(0, index);
      setDynamicIconList([...indexToEnd, ...startToIndex]);
    }
  }
  const moveToEnd = (arr: Array<ReactElement>, index: number) => {
    const arrCopy = [...arr];
    // move 0 to index, inclusive of index
    if (index < arrCopy.length && index >= 0) {
      const indexToEnd = arrCopy.slice(index + 1);
      const startToIndex = arrCopy.slice(0, index + 1);
      setDynamicIconList([...indexToEnd, ...startToIndex]);
    }
  }

  // slider handlers
  const handleSliderOpen = () => {
    setSliderOpen(true);
  }

  const handleSliderClose = () => {
    setSliderOpen(false)
    setHighlightedIndex(null);
  }

  // const longPress = Gesture.LongPress()

  const panDelay = 200;
  const pan = Gesture.Pan().activateAfterLongPress(panDelay)
    .onStart(() => {
      // console.log('start pan');
      runOnJS(handleSliderOpen)() // something wrong with setSlider open effects?
    }
    )
    .onUpdate((event) => {
      // console.log('update pan');
      // update highlighted index
      const sliderOffset = (iconList.length + 2.5) * iconHeight / 2;
      // translated amount (in pixels) / height of icon with padding (in pixels)
      const closestIndex = Math.floor((event.translationY + sliderOffset + iconHeight) / trueIconHeight);
      // console.log('closest',closestIndex);
      // only update if within range
      if (closestIndex >= 0 && closestIndex < iconList.length) {
        runOnJS(setHighlightedIndex)(closestIndex);
      }

    })
    .onEnd(() => {
      // console.log('end pan')
      // set the selected icon once user releases pan
      if (highlightedIndex !== null) {
        // setSelectedIcon(dynamicIconList[highlightedIndex]);
        runOnJS(iconChangeFn)(dynamicIconList[highlightedIndex]);
        // reorder icon list, so selected icon is first
        if (openDirection == 'up') {
          runOnJS(moveToEnd)(dynamicIconList, highlightedIndex);
        }
        else if (openDirection == 'down') {
          runOnJS(moveToFront)(dynamicIconList, highlightedIndex);
        }
      }
      runOnJS(handleSliderClose)();
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
            paddedListViewHeight :
            trueIconHeight + iconPadding,
          translateY: openDirection == 'up' ? (sliderOpen ? -(iconList.length * iconHeight / 2 + iconPadding) : 0) :
            (sliderOpen ? (iconList.length * iconHeight / 2 + iconPadding) : 0)
        }}
        transition={{
          type: 'timing',
          duration: sliderAnimateDuration,
        }}
      >
        {/* icon lists */}
        <MotiView
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
            const clonedIcon = cloneElement(icon); // need to clone icon for some reason
            return (<View
              key={index}
              style={[index == highlightedIndex ? styles.highlightedIconView : null, styles.iconView]}
            >
              {clonedIcon}
            </View>)
          }
          )}
        </MotiView>
      </MotiView>
    </GestureDetector>
  )
}

export default SliderButtonSelect;
