import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const DrawerButton = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    };

    return (
        <TouchableOpacity onPress={openDrawer}>
            <Icon name="bars" size={40} color="#F7EBFD" />
        </TouchableOpacity>
    );
};

export default DrawerButton;