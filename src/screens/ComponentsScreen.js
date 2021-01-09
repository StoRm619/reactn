import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Matthews';
    const welcome = <Text>Welcome</Text>
    return <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        {welcome}

        <Text style={styles.nameStyle}>My name is {greeting}</Text>

    </View>

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,

    },
    nameStyle: {
        fontSize: 20,
    }

});

export default ComponentsScreen;