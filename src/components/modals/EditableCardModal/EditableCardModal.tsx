import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';

import { Portal, Modal } from 'react-native-paper';
// import Modal from "react-native-modal";
// import { BlurView } from 'expo-blur';

import BlurOverlayContext, { BlurOverlayProvider } from '@/src/providers/OverlayProviders/BlurOverlayProvider';

import EditableCard from '../../items/cards/EditableCard/EditableCard'
import { cardDimensions, magpieDimensions } from '@/assets/constants/magpieDimensions';
import { entryDataType } from '@/src/types/data';

// use BlurOverlayProvider with EditableCard as child.

interface EditableCardModalProps {
    entryData: entryDataType | undefined,
    visible: boolean,
    fullScreen: boolean,
    modalDismissFn: () => void
}

const EditableCardModal = ({
    entryData,
    visible = false,
    fullScreen = true,
    modalDismissFn = () => { }
}: Partial<EditableCardModalProps>
) => {

    // const {
    //     hideBlurOverlay
    // } = useContext(BlurOverlayContext);

    const styles = StyleSheet.create({
        // centering here DN work
        modalContainer: {
            display: 'flex',
            backgroundColor: 'maroon',
            justifyContent: 'center',
            alignItems: 'center'
        },

        // already centered?
        cardModal: {
            alignSelf: fullScreen ? 'flex-start' : 'center',
            width: cardDimensions.width,
            height: cardDimensions.height,
            borderRadius: cardDimensions.borderRadius
        }
    })

    return (
        <>
            {/* <BlurOverlayProvider> */}
            {/* <View style={styles.modalContainer}> */}
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={() => {
                        modalDismissFn();
                        // hideBlurOverlay();
                    }}
                    contentContainerStyle={styles.cardModal}
                >
                    <EditableCard
                        entryData={entryData}
                        closeCardFn={() => {
                            modalDismissFn();
                            // hideBlurOverlay();
                        }}
                        isFullscreen={fullScreen}
                    />
                </Modal>
            </Portal>
            {/* </View> */}
            {/* </BlurOverlayProvider> */}
        </>
    )
}

export default EditableCardModal
