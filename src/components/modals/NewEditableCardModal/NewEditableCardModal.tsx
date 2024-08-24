import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';

import { Portal, Modal } from 'react-native-paper';
// import Modal from "react-native-modal";
// import { BlurView } from 'expo-blur';

// import BlurOverlayContext, { BlurOverlayProvider } from '@/src/providers/OverlayProviders/BlurOverlayProvider';

import { cardDimensions, magpieDimensions } from '@/assets/constants/magpieDimensions';
import { entryDataType } from '@/src/types/data';
import NewEditableCard from '../../items/cards/EditableCard/NewEditableCard';

// use BlurOverlayProvider with EditableCard as child.

interface NewEditableCardModalProps {
    visible: boolean,
    fullScreen: boolean,
    modalDismissFn: () => void
}

const NewEditableCardModal = ({
    visible = false,
    fullScreen = true,
    modalDismissFn = () => { }
}: Partial<NewEditableCardModalProps>
) => {

    // const {
    //     hideBlurOverlay
    // } = useContext(BlurOverlayContext);

    const styles = StyleSheet.create({
        modalContainer: {
            display: 'flex',
            backgroundColor: 'maroon',
            justifyContent: 'center',
            alignItems: 'center'
        },
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
                    <NewEditableCard
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

export default NewEditableCardModal
