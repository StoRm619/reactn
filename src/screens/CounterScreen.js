import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import CounterButton from '../components/CounterButton';
const COUNTER_INCREMENT = 1

const reducer = (state, action) =>{
    switch(action.type){
        case'increase_#':
        return{ ...state, counter: state.counter + action.payload }
        case'decrease_#':
        return { ...state, counter: state.counter + action.payload }
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter:0});
    const {counter} = state;

    return (
        <View>
            <CounterButton title="Increase" onIncrease={() => dispatch({ type: 'increase_#', payload: COUNTER_INCREMENT })}
             onDecrease={() => dispatch({ type: 'decrease_#', payload: -1 * COUNTER_INCREMENT })} />

            <Text>Current Count {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
