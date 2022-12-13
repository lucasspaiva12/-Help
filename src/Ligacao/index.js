
import React, {useState} from 'react';


import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
 

import call from 'react-native-phone-call';
import { IconButton, Colors } from 'react-native-paper';
const Ligacao = () => {
  const [inputValue, setInputValue] = useState('');
 
  const triggerCall = () => {

   
    const args = {
      number: inputValue,
      prompt: true,
    };
   
    call(args).catch(console.error);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       
        <Text style={styles.titleText}>
           Número Telefônico:
        </Text>
        <Text></Text>
        <TextInput
          value={inputValue}
          onChangeText={
            (inputValue) => setInputValue(inputValue)
          }
          placeholder={'                    (XX) XXXXX-XXXX                     '}
          keyboardType="numeric"
          style={styles.textInput}
        />
         <Text >
            
          </Text>
          <IconButton
           icon="phone" onPress={triggerCall} color={Colors.red900}
           size={60}/>
         
          
       
      </View>
    </SafeAreaView>
  );
};
 
export default Ligacao;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'darkred',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: 'green',
  },
  buttonTextStyle: {
    color: 'green',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
});

