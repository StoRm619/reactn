import React, {useState}from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
const [name, setName] = useState('');



    return <View>
         <Text>My Name is {name}</Text>
   <TextInput 
   style={styles.input}
   autoCapitalize="none"
   autoCorrect={false}
   value={name}
   onChangeText={(newValue) => setName(newValue)}
   />
  {name.length <5  ? <Text> Need password longer than 5 character</Text>: null}
    </View>
};

const styles = StyleSheet.create({
input:{
    margin:15,
    borderColor:'black',
    borderWidth:1
}
})

export default TextScreen;