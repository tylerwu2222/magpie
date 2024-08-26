import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';

import { Portal, Modal } from 'react-native-paper';
// import Modal from "react-native-modal";
// import { BlurView } from 'expo-blur';

import BlurOverlayContext, { BlurOverlayProvider } from '@/src/providers/OverlayProviders/BlurOverlayProvider';

import DraggableCard from '../../items/cards/DraggableCard/DraggableCard'
import { cardDimensions, magpieDimensions } from '@/assets/constants/magpieDimensions';
import { entryDataType } from '@/src/types/data';

// use BlurOverlayProvider with DraggableCard as child.

interface DraggableCardModalProps {
    entryData: entryDataType | undefined,
    visible: boolean,
    // fullScreen: boolean,
    // isNewNote: boolean,
    modalDismissFn: () => void,
    cardPosition: { x: number, y: number }
}

const DraggableCardModal = ({
    entryData,
    visible = false,
    // fullScreen = true,
    // isNewNote = false,
    modalDismissFn = () => { },
    cardPosition
}: Partial<DraggableCardModalProps>
) => {

    // const {
    //     hideBlurOverlay
    // } = useContext(BlurOverlayContext);

    const styles = StyleSheet.create({
        cardModal: {
            height: magpieDimensions.vh,
            width: magpieDimensions.vw,
            overflow: 'hidden'
            // alignSelf: 'center',
            // position: 'absolute',
            // top: startingPosition ? startingPosition.y - cardDimensions.height / 2 : 0,
            // left: startingPosition ? startingPosition.x - cardDimensions.width / 2 : 0,
            // width: cardDimensions.width,
            // height: cardDimensions.height,
            // borderRadius: cardDimensions.borderRadius
        }
    })

    // console.log('DCM starting pos', startingPosition);
    return (
        <>
            {/* <BlurOverlayProvider> */}
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={() => {
                        modalDismissFn();
                        // hideBlurOverlay();
                    }}
                    contentContainerStyle={styles.cardModal}
                >
                    <DraggableCard
                        entryData={entryData}
                        cardPosition={cardPosition}
                        onPressOutFn={() => {
                            modalDismissFn(); // hide modal when
                            // hideBlurOverlay();
                        }}
                    />
                </Modal>
            </Portal>
            {/* </BlurOverlayProvider> */}
        </>
    )
}

export default DraggableCardModal
