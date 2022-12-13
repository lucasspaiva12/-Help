import React from "react";
import { View, Text, StyleSheet,Button,TouchableOpacity,Linking } from "react-native";
import * as Clipboard from 'expo-clipboard';
import * as Contacts from 'expo-contacts';
import call from 'react-native-phone-call'


const Contact = ({ contact }) => {
  const [inputValue, setInputValue] = React.useState("");

  const copyText = (text) => {
    Clipboard.setString(text);
  };
  return (
    <View style={styles.contactCon}>
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{contact?.name[0]}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>{contact?.name}</Text>
        <Text style={styles.phoneNumber}>
        {contact?.phoneNumbers?.[0]?.number ?? 'No phone number'}
        </Text>
        <TouchableOpacity  onPress={() => { const args = {
                                                 number: contact?.phoneNumbers?.[0]?.number,
                                                prompt: true, };
                             call(args).catch(console.error);
                                                      } } >
                 <Text style={styles.botao}>Ligar</Text>
              </TouchableOpacity>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "darkred",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor:"white"
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
    color:'white'
  },
  name: {
    fontSize: 16,
    color:"black"
  },
  phoneNumber: {
    color: "black",
  },
  botao:{
    color:'darkred',
    textDecorationLine: 'underline',
  }

});
export default Contact;
