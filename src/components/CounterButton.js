import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";


const CounterButton = ({ onIncrease, onDecrease }) => {


    return (
        <View>
            <Button onPress={() => onIncrease()} title={`Increase` } />
            <Button onPress={() => onDecrease()} title={`Decrease `} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterButton;
