import { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';


import { Portal, Modal, Drawer } from 'react-native-paper';
import { MotiView, View } from 'moti';
import { magpieDimensions } from '@/assets/constants/magpieDimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/assets/constants/Colors';
import { HomeContext } from '@/app/home';

const SideDrawerMenu = () => {
    const [active, setActive] = useState('');
    const { sideMenuVisible, setSideMenuVisible } = useContext(HomeContext);

    const topOffset = 60;
    const styles = StyleSheet.create({
        sideDrawerMenuModal:{
            display:'flex',
            justifyContent: 'flex-start'
        },
        sideDrawerMenu: {
            position: 'absolute',
            top: topOffset,
            left: 0,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            height: magpieDimensions.vh - topOffset,
            width: magpieDimensions.vw / 2,
            backgroundColor: Colors.lightTheme.lightBackground
        },
        logoutButton: {
            alignItems: 'center',
            justifyContent: 'center',
            color: 'red'
        }
    });

    const handleLogout = () => {

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
                        <Drawer.Item
                            label="Profile"
                            icon='bird'
                            active={active === 'first'}
                            onPress={() => setActive('first')}
                        />
                        <Drawer.Item
                            label="Settings"
                            icon='cog'
                            active={active === 'second'}
                            onPress={() => setActive('second')}
                        />
                        <Drawer.Item
                            label="Help"
                            icon='help-circle'
                            active={active === 'third'}
                            onPress={() => setActive('third')}
                        />
                    </Drawer.Section>
                    <Drawer.Section
                        theme={{ colors: { onSurfaceVariant: 'red' } }}
                        showDivider={false}
                    >
                        <Drawer.Item
                            label='Logout'
                            active={active === 'fourth'}
                            onPress={handleLogout}
                            style={styles.logoutButton}
                        />
                    </Drawer.Section>
                </MotiView>
                {/* </View> */}
            </Modal>
        </Portal>
    );
};

export default SideDrawerMenu;