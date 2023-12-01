import React from "react";
import { Text, View, Linking, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePageTestTab = ({ Title }) => {
    let titleText = Title; 
    const navigation = useNavigation();

    const goToTest = () => {
        const textToPass = titleText;
        navigation.navigate('Test', { text: textToPass });
    };

    return (
        <TouchableOpacity onPress={goToTest} style={[styles.container]}>
            <Text style={[styles.title]}>{titleText}</Text>
            <Text style={[styles.tag]}
                    onPress={() => Linking.openURL('http://x.com')}>
                #Tag1   #Tag2
            </Text>
            <Text style={[styles.description]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: '#DB7F8E',
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#FFDBDA',
    },

    title: {
        marginLeft: 5,
        padding: 10,
        fontSize: 20,
        color: '#F7EBFD',
    },

    tag: {
        width: 130,
        marginLeft: 5,
        paddingLeft: 10,
        color: '#343a40',
    },

    description: {
        marginLeft: 5,
        padding: 10,
        fontSize: 15,
        color: '#F7EBFD',
    },
});

export default HomePageTestTab;