import React from 'react';
import { AntDesign, Entypo, Fontisto, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { Icon } from 'react-native-vector-icons/Icon';

type IconProps = {
    library?: string;
    name?: any;
    size?: number;
    color?: string;
};

const ExpoIcon: React.FC<IconProps> = ({
    library,
    name,
    size,
    color
}) => {
    // return default icon if no library/name provided
    if (!library || !name) {
        return <AntDesign name="pluscircle" size={24} color="black" />;
    }
    else {
        if (library == 'AntDesign') {
            return <AntDesign name={name} size={size} color={color} />;
        }
        else if (library == 'Entypo') {
            return <Entypo name={name} size={size} color={color} />;
        }
        else if (library == 'Fontisto') {
            return <Fontisto name={name} size={size} color={color} />;
        }
        else if (library == 'Ionicons') {
            return <Ionicons name={name} size={size} color={color} />;
        }
        else if (library == 'MaterialIcons') {
            return <MaterialIcons name={name} size={size} color={color} />;
        }
        else if (library == 'MaterialCommunityIcons') {
            return <MaterialCommunityIcons name={name} size={size} color={color} />;
        }
        else {
            return <AntDesign name="pluscircle" size={24} color="black" />;
        }
    }
};

export default ExpoIcon;
