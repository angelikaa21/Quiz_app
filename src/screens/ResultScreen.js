import React from "react";
import { View, StyleSheet } from "react-native";

import HeaderComponent from "../components/HeaderComponent";

function ResultScreen({}) {
    return (
        <View style={(styles.main)}>
            <HeaderComponent screenName="Result" />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#9d8189',
    },
});

export default ResultScreen;