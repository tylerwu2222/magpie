import { StyleSheet } from 'react-native'
import React from 'react';

import { Portal, Modal } from 'react-native-paper';
import EditableCard from '../../../items/cards/EditableCard/EditableCard'
import { cardDimensions } from '@/assets/constants/magpieDimensions';
import { entryDataType } from '@/src/types/data';

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

    const styles = StyleSheet.create({
        modalContainer: {
            display: 'flex',
            backgroundColor: 'maroon',
            justifyContent: 'center',
            alignItems: 'center'
        },

        cardModal: {
            alignSelf: fullScreen ? 'flex-start' : 'center',
            borderRadius: cardDimensions.borderRadius
        }
    })

    return (
        <>
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
                        }}
                        isFullscreen={fullScreen}
                    />
                </Modal>
            </Portal>
        </>
    )
}

export default EditableCardModal
