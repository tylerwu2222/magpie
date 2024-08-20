import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign, Entypo, Fontisto, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { Icon } from 'react-native-vector-icons/Icon';

interface IconProps {
    library: string;
    name: any;
    size: number;
    padding: number;
    color: string;
    backgroundColor: string;
};

const ExpoIcon = ({
    library,
    name,
    size = 40,
    padding = 10,
    color = "black",
    backgroundColor = 'transparent'
}: Partial<IconProps>) => {

    const styles = StyleSheet.create({
        iconView: {
            padding: padding,
            backgroundColor: backgroundColor
        }
    })

    // console.log('library',library,'name',name,'color',color);
    // icon = default icon if no library/name provided
    let icon;
    if (!library || !name) {
        icon = <AntDesign name="pluscircle" size={size} color="black" />;
    }
    else {
        if (library == 'AntDesign') {
            icon = <AntDesign name={name} size={size} color={color} />;
        }
        else if (library == 'Entypo') {
            icon = <Entypo name={name} size={size} color={color} />;
        }
        else if (library == 'Fontisto') {
            icon = <Fontisto name={name} size={size} color={color} />;
        }
        else if (library == 'Ionicons') {
            icon = <Ionicons name={name} size={size} color={color} />;
        }
        else if (library == 'MaterialIcons') {
            icon = <MaterialIcons name={name} size={size} color={color} />;
        }
        else if (library == 'MaterialCommunityIcons') {
            icon = <MaterialCommunityIcons name={name} size={size} color={color} />;
        }
        else {
            icon = <AntDesign name="pluscircle" size={size} color="black" />;
        }
    }
    return <View style={styles.iconView}>
        {icon}
    </View>
};

export default ExpoIcon;
