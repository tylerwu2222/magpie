import { StyleSheet } from 'react-native'
import React, { useContext } from 'react';

import { Portal, Modal } from 'react-native-paper';

import DraggableCard from '../../items/cards/DraggableCard/DraggableCard'
import { cardDimensions, magpieDimensions } from '@/assets/constants/magpieDimensions';
import { entryDataType } from '@/src/types/data';


interface DraggableCardModalProps {
    entryData: entryDataType | undefined,
    visible: boolean,
    modalDismissFn: () => void,
    cardPosition: { x: number, y: number },
    isHoveringDelete: boolean
}

const DraggableCardModal = ({
    entryData,
    visible = false,
    modalDismissFn = () => { },
    cardPosition,
    isHoveringDelete = false
}: Partial<DraggableCardModalProps>
) => {

    const styles = StyleSheet.create({
        cardModal: {
            height: magpieDimensions.vh,
            width: magpieDimensions.vw,
            overflow: 'hidden'
        }
    })

    // console.log('DCM starting pos', startingPosition);
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
                    <DraggableCard
                        entryData={entryData}
                        cardPosition={cardPosition}
                        onPressOutFn={() => {
                            modalDismissFn(); // hide modal when
                            // hideBlurOverlay();
                        }}
                        isHoveringDelete={isHoveringDelete}
                    />
                </Modal>
            </Portal>
        </>
    )
}

export default DraggableCardModal
