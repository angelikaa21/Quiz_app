import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FooterButton = () => {
    const navigation = useNavigation();

    const goToResultScreen = () => {
        navigation.navigate('Results');
    };

    return (
        <TouchableOpacity onPress={goToResultScreen} style={[styles.container]}>
            <Text style={[styles.text]}>Check!</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DB7F8E',
        width: 130,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#FFDBDA',
    },

    text: {
        textAlign: 'center',
        color: '#F7EBFD',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: "bold",
    },
});

export default FooterButton;
