import { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';


import { Portal, Modal, Drawer } from 'react-native-paper';
import { MotiView, View } from 'moti';
import { magpieDimensions } from '@/assets/constants/magpieDimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/assets/constants/Colors';
import { HomeContext } from '@/app/home';
import { signOutUser } from '@/src/providers/UserProvider/UserProvider';

import { Link } from 'expo-router';

const SideDrawerMenu = () => {
    const [active, setActive] = useState('');
    const { sideMenuVisible, setSideMenuVisible } = useContext(HomeContext);

    const topOffset = 60;
    const styles = StyleSheet.create({
        sideDrawerMenuModal: {
            display: 'flex',
            justifyContent: 'flex-start'
        },
        sideDrawerMenu: {
            position: 'absolute',
            top: topOffset,
            left: 0,
            borderTopRightRadius: 40,
            // borderBottomRightRadius: 40,
            height: magpieDimensions.vh - topOffset,
            width: magpieDimensions.vw / 2,
            backgroundColor: Colors.lightTheme.lightBackground
        }
    });

    const handleLogout = () => {
        // sign out user and navigate to auth page
        signOutUser();
    };



    return (
        <Portal>
            <Modal
                visible={sideMenuVisible}
                onDismiss={() => setSideMenuVisible(false)}
                style={styles.sideDrawerMenuModal}
            >
                {/* <View style={styles.SideDrawerMenuDarkenView}> */}
                <MotiView
                    key="sideMenu"
                    from={{
                        translateX: -magpieDimensions.vw / 2,
                        // width: magpieDimensions.vw
                    }}
                    animate={{
                        translateX: 0,
                        // width: magpieDimensions.vw/2
                    }}
                    exit={{
                        translateX: -magpieDimensions.vw / 2,
                    }}
                    transition={{
                        type: 'timing'
                    }}
                    style={styles.sideDrawerMenu}
                >
                    <Drawer.Section >
                        <Link href="/profile" asChild>
                            <Drawer.Item
                                label="Profile"
                                icon='bird'
                                active={active === 'first'}
                                onPress={() => setActive('first')}
                            />
                        </Link>
                        <Link href="/settings" asChild>
                            <Drawer.Item
                                label="Settings"
                                icon='cog'
                                active={active === 'second'}
                                onPress={() => setActive('second')}
                            />
                        </Link>
                        <Link href="/help" asChild>
                            <Drawer.Item
                                label="Help"
                                icon='help-circle'
                                active={active === 'third'}
                                onPress={() => setActive('third')}
                            />
                        </Link>
                    </Drawer.Section>
                    <Drawer.Section
                        showDivider={false}
                    >
                        <Link href="/auth" asChild>
                            <Drawer.Item
                                label='Logout'
                                active={active === 'fourth'}
                                onPress={handleLogout}
                                theme={{ colors: { onSecondaryContainer: 'red' } }}
                            />
                        </Link>
                    </Drawer.Section>
                </MotiView>
                {/* </View> */}
            </Modal>
        </Portal>
    );
};

export default SideDrawerMenu;