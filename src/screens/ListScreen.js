import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {
    const food = [
        { name: 'Food1', age: 20 },
        { name: 'Food2', age: 21 },
        { name: 'Food3', age: 22 },
        { name: 'Food4' },
        { name: 'Food5' },
        { name: 'Food6' },
        { name: 'Food7' },
        { name: 'Food8' },
        { name: 'Food9' },
        { name: 'Food10' },
        { name: 'Food11' }
    ];

    return (
        <FlatList
            keyExtractor={(food) => food.name}
            data={food}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}- Age {item.age}</Text>
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;