import { StyleSheet } from 'react-native'
import React from 'react';

import { Portal, Modal } from 'react-native-paper';
import { cardDimensions } from '@/assets/constants/magpieDimensions';
import NewEditableCard from '../../items/cards/EditableCard/NewEditableCard';

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
                    <NewEditableCard
                        closeCardFn={() => {
                            modalDismissFn();
                            // hideBlurOverlay();
                        }}
                        isFullscreen={fullScreen}
                    />
                </Modal>
            </Portal>
        </>
    )
}

export default NewEditableCardModal
