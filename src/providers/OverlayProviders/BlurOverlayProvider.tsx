import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';


// Define the shape of your context data
interface BlurOverlayContextProps {
    showBlurOverlay: () => void;
    hideBlurOverlay: () => void;
    isBlurOverlayVisible: boolean;
}

// Create the context with default values
const BlurOverlayContext = createContext<BlurOverlayContextProps>({
    showBlurOverlay: () => { },
    hideBlurOverlay: () => { },
    isBlurOverlayVisible: false
});

interface BlurOverlayProviderProps {
    children: ReactNode;
}

// Create a Provider component
export const BlurOverlayProvider: React.FC<BlurOverlayProviderProps> = ({ children }) => {

    const [isBlurOverlayVisible, setBlurOverlayVisible] = useState(false);

    const showBlurOverlay = () => setBlurOverlayVisible(true);
    const hideBlurOverlay = () => setBlurOverlayVisible(false);

    return (
        <BlurOverlayContext.Provider
            value={{
                showBlurOverlay,
                hideBlurOverlay,
                isBlurOverlayVisible
            }}>
            {/* render children  above blur view */}
            {children}
            <View style={styles.overlay}>
                <BlurView intensity={20} tint="dark" style={styles.blurView}>
                </BlurView>
            </View >
        </BlurOverlayContext.Provider >
    );
};

export default BlurOverlayContext;

const styles = StyleSheet.create({
    overlay: {
        // absolute and at 0,0
        ...StyleSheet.absoluteFillObject,
        // width: '100%',
        // height: '100%',
        // backgroundColor: 'orange',
        zIndex: 1, // render blur above background (default is 0)
    },
    centeredView: {
        backgroundColor: 'cyan',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    blurView: {
        flex: 1,
        // paddingHorizontal: 'auto'
        // zIndex: 2,
    },
});