import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
// import AppContext from '@/AppContextProvider';

import { Portal, Modal } from 'react-native-paper';
// import Modal from "react-native-modal";
// import { BlurView } from 'expo-blur';

import BlurOverlayContext, { BlurOverlayProvider } from '@/src/providers/OverlayProviders/BlurOverlayProvider';

import EditableCard from '../../items/cards/EditableCard/EditableCard'
import { cardDimensions, magpieDimensions } from '@/assets/constants/magpieDimensions';
import { entryDataType } from '@/src/types/data';

// use BlurOverlayProvider with EditableCard as child.

interface EditableCardModalProps {
    entryID: number,
    entryData: entryDataType,
    visible: boolean;
    modalDismissFn: () => void;
}

const EditableCardModal = ({
    entryID = 0,
    entryData = {},
    visible = false,
    modalDismissFn = () => { }
}: EditableCardModalProps
) => {
    // const {
    //     editEntryID,
    //     editEntryData
    // } = useContext(AppContext);

    const {
        // isBlurOverlayVisible,
        hideBlurOverlay
    } = useContext(BlurOverlayContext);



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
            alignSelf: "center",
            width: cardDimensions.width,
            height: cardDimensions.height,
            borderRadius: cardDimensions.borderRadius
        }
    })

    return (
        <BlurOverlayProvider>
            <View style={styles.modalContainer}>
                <Portal>
                    <Modal
                        visible={visible}
                        onDismiss={() => {
                            modalDismissFn();
                            hideBlurOverlay();
                        }}
                        contentContainerStyle={styles.cardModal}
                    >
                        <EditableCard
                            entryID={entryID}
                            entryData={entryData} />
                    </Modal>
                </Portal>
            </View>
        </BlurOverlayProvider>
    )
}

export default EditableCardModal
