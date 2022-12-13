import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,SafeAreaView,FlatList,TouchableOpacity,Image, Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import call from 'react-native-phone-call'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from "../firebase";
import Constants from 'expo-constants';
import { IconButton, Colors } from 'react-native-paper';
import * as Location from 'expo-location';


 function Agenda({ navigation }) {
  
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <View>
      <Text></Text>
      <Text style={styles.titleText}>SELECIONE A CATEGORIA DO </Text>
      <Text style={styles.titleText}>CONTATO DESEJADO</Text>
      </View>
    <View style={styles.imagem}>

      <Image
        source={require("./imagem/Icone.png")}
        style={{ width: 250, height: 250, margin: 16 }}
      />


    </View>
    <View style={styles.cont}>
      <ScrollView>
      <Text></Text>
   <Button color='darkred' title="Contatos de Emergência " onPress={() => navigation.navigate('Lista')}/>
   <Text></Text><Text></Text>

   <Button color='darkred' title="Contatos dos Serviços Público" onPress={() => navigation.navigate('Orgaos')}/>
   <Text></Text><Text></Text>
 
   <Button color='darkred' title="Contatos dos Serviços de Emergência" onPress={() => navigation.navigate('Emergencia')}/>
   
   
   </ScrollView>
  </View>
  </SafeAreaView>

);

}
function Adicionar  ({navigation})  {
  const [inputValue, setInputValue] = React.useState("");

const copyText = (text) => {
  Clipboard.setString(text);
};
const [nome, setNome] = useState ('')
const [numero, setNumero] = useState ('')
const [data, setData] = useState ('')

const onChangeNome = (txtNome) => {
setNome(txtNome)
}
const onChangeNumero = (txtNumero) => {
setNumero(txtNumero)
}
const InsertContato = () =>  {
if (numero.length != 11) {
  alert('Por favor insira um número correto!');
  return;
}else{
  firebase.firestore().collection('bancoDeDados').add({nome:nome, numero:numero});
  alert('Contato adicionado!');
}
}
const ref = firebase.firestore().collection('bancoDeDados');
useEffect(()=>{
  ref.onSnapshot(querySnapshot =>{
      const data = []
      querySnapshot.forEach(doc => {
          data.push({
              ...doc.data(),
              key:doc.id
          })
      })
      setData(data)
  })
  return () => ref();
}, [])

return (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Lista')} color={'black'}
           size={30}/>
<Text></Text>
      <Text style={styles.titleText}>ADICIONE CONTATOS DE EMERGÊNCIA</Text>

      <Text></Text>
       <Text style={styles.titleTextsmall}>Insira  o nome</Text>
      <TextInput
        placeholder={'Nome'}
        clearButtonMode="always"
        style={styles.textInput}
        value={nome}
       onChangeText={txtNome => onChangeNome(txtNome)}
      />
      <Text style={styles.titleTextsmall}> Insira  o número</Text>
      
      <TextInput
      clearButtonMode="always"
        placeholder={'(XX) XXXX-XXXX'}
        style={styles.textInput}
       value={numero}
        onChangeText={txtNumero => onChangeNumero(txtNumero)}
      />
      <Text></Text>
      <Button color='darkred' title="Adicionar "
onPress={InsertContato}
       />
       <Text></Text>
 
    </View>
  </SafeAreaView>
);
};
function Lista({navigation}) {

  const alerta = () =>  {
   
      alert('Seus contatos adicionados estão aqui!'+
      ' Caso deseje efetuar uma ligação , aperte o botão com ícone de telefone. Caso deseje enviar uma mensagem de socorro, aperte o botão com ícone de mensagem (Essa botão inviará sua localização e um pedido de socorro para o contato selecionado via WhatsApp)');
      return;
    }
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation([location.coords.latitude, location.coords.longitude ]);
        

        console.log('My Latitude');
        console.log(location.coords.latitude);
        console.log('My Longitude');
        console.log(location.coords.longitude);
      })();
    }
  }, []);

  let coord = 'Carregando...';
  if (errorMsg) {
    coord = errorMsg;
  } else if (location) {
    coord = JSON.stringify(location);
  }

  const [inputValue, setInputValue] = React.useState("");
 

const [nome, setNome] = useState ('')
const [numero, setNumero] = useState ('')
const [data, setData] = useState ('')

const onChangeNome = (txtNome) => {
setNome(txtNome)
}
const onChangeNumero = (txtNumero) => {
setNumero(txtNumero)
}
const InsertContato = () =>  {
firebase.firestore().collection('bancoDeDados').add({nome:nome, numero:numero});
}
const ref = firebase.firestore().collection('bancoDeDados');
useEffect(()=>{
  ref.onSnapshot(querySnapshot =>{
      const data = []
      querySnapshot.forEach(doc => {
          data.push({
              ...doc.data(),
              key:doc.id
          })
      })
      setData(data)
  })
  return () => ref
}, [])
  return (
   
    <View style={styles.contactDat} >
      
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
           <IconButton
           icon="alert" style= {{
            position: 'absolute',
            top:0,
            right:0,
        }}onPress={alerta}
           size={30}/>
           <Text  style={styles.titleText}>CONTATOS ADICIONADOS:</Text><Text></Text>


<Text style={styles.teste}></Text> 
<FlatList
         data={data}
         renderItem = {({item}) => (
          <View style={styles.contactCon}>
             <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{'SOS'}</Text>
        </View>
      </View>
            <View style={styles.contactDat}> 
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.phoneNumber}>{item.numero}</Text>
                
                
<View style={{ flex: 2,flexDirection: "row" ,marginLeft:20}}>
              <IconButton
           icon="phone" color={'darkred'} onPress={() => { const args = {
            number:'015'+ item?.numero,
           prompt: true, };
call(args).catch(console.error);
                 } } 
           size={30}/>
           
           <IconButton
           icon="message" color={'darkred'}  onPress={() => { const args = {
            number: item?.numero,
           prompt: true, };
           Linking.openURL('whatsapp://send?text=Preciso de ajuda, '+item.nome+'! Minha localização=> https://www.google.com.br/maps/dir/'
          + '/'
           + coord[1] +  coord[2] +  coord[3] +  coord[4] +  coord[5] +  coord[6] +  coord[7] +  coord[8] + coord[9] +  coord[10] +  coord[11]
           + coord[12] +  coord[13] +  coord[14] +  coord[15] +  coord[16] +  coord[17] +  coord[18] +  coord[19] + coord[20] +  coord[21] +  coord[22] + '/@'
           + coord[1] +  coord[2] +  coord[3] +  coord[4] +  coord[5] +  coord[6] +  coord[7] +  coord[8] + coord[9] +  coord[10] +  coord[11]
           + coord[12] +  coord[13] +  coord[14] +  coord[15] +  coord[16] +  coord[17] +  coord[18] +  coord[19] + coord[20] +  coord[21] +  coord[22]+ '15.92z'
           +'&phone=55'+ item.numero)
          
                 } } 
           size={30}/>
           


              </View>
            </View>
            </View>
         )}
         />
         <Button color='darkred' title="ADICIONAR CONTATO S.O.S" onPress={() => navigation.navigate('Adicionar')}/>
         <Text></Text><Text></Text>
 </View>

    
      

  );
}



function Emergencia({navigation}) {

  const CorpoDeBombeiros = () => {
    const args = {
      number: '193',
      prompt: true,
    };
    call(args).catch(console.error);
  };

  const PoliciaCivil = () => {
    const args = {
      number: '197',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const PoliciaFederal = () => {
    const args = {
      number: '194',
      prompt: true,
    };
    const Export = () => {
      const args = {
        number: '190',
        prompt: true,
      };
      call(args).catch(console.error);
    };
    call(args).catch(console.error);
  };
  const PoliciaMilitar = () => {
    const args = {
      number: '190',
      prompt: true,
    };
    call(args).catch(console.error);
  };
 
  const Samu = () => {
    const args = {
      number: '192',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  
  return (
    <View style={styles.cont}>
    <ScrollView>

    <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>

 <Button color='darkred' title="Samu " onPress={() => { Samu('')}}/>

 <Text></Text>
 <Button color='darkred' title="Corpo de Bombeiros " onPress={() => { CorpoDeBombeiros('')}}/>
 <Text></Text>

 <Button color='darkred' title="Polícia Civil " onPress={() => { PoliciaCivil('')}}/>

<Text></Text>
<Button color='darkred' title="Polícia Federal " onPress={() => { PoliciaFederal('')}}/>

<Text></Text>
<Button color='darkred' title="Polícia Militar " onPress={() => { PoliciaMilitar ('')}}/>

<Text></Text>
 </ScrollView>
</View>
  
  );
}

function Orgaos({navigation}) {
  const ConselhoTutelar = () => {
    const args = {
      number: '100',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const DefesaCivil = () => {
    const args = {
      number: '199',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  
  const CentraMlulher = () => {
    const args = {
      number: '180',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const DisqueDenuncia = () => {
    const args = {
      number: '181',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const Detran = () => {
    const args = {
      number: '155',
      prompt: true,
    };
    call(args).catch(console.error);
  };

  const Inss = () => {
    const args = {
      number: '135',
      prompt: true,
    };
    call(args).catch(console.error);
  };

  const PessoasDesaparecidas = () => {
    const args = {
      number: '0800 2828 197',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const PROCON = () => {
    const args = {
      number: '151',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const ReceitaFederal = () => {
    const args = {
      number: '146',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const Vigilancia = () => {
    const args = {
      number: '150',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  const Tribunal = () => {
    const args = {
      number: '148',
      prompt: true,
    };
    call(args).catch(console.error);
  };
  return (
    <View style={styles.cont}>
    <ScrollView>

    <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
 <Text></Text>

 <Button color='darkred' title="Conselho Tutelar " onPress={() => { ConselhoTutelar('')}}/>

 <Text></Text>

 <Button color='darkred' title="Defesa Civil" onPress={() => { DefesaCivil('')}}/>

 <Text></Text>
 <Button color='darkred' title="Central de Atendimento à Mulher " onPress={() => { CentraMlulher('')}}/>

 <Text ></Text>
 <Button color='darkred' title="Disque Denúncia " onPress={() => { DisqueDenuncia('')}}/>

 <Text></Text>
 <Button color='darkred' title="Detran" onPress={() => { Detran('')}}/>

 <Text></Text>
 <Button color='darkred' title="INSS " onPress={() => { Inss('')}}/>

 <Text></Text>
 <Button color='darkred' title="Pessoas desaparecidas " onPress={() => { PessoasDesaparecidas('')}}/>

 <Text></Text>
 <Button color='darkred' title="PROCON " onPress={() => { PROCON('')}}/>

 <Text></Text>
 <Button color='darkred' title="Receita Federal " onPress={() => { ReceitaFederal('')}}/>

 <Text></Text>
 <Button color='darkred' title="Vigilância Sanitária " onPress={() => { Vigilancia('')}}/>

 <Text></Text>
 <Button color='darkred' title="Tribunal Regional Eleitoral" onPress={() => { Tribunal('')}}/>

 <Text></Text>

 </ScrollView>
</View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}}  name="Home" component={Agenda} />
        <Stack.Screen options={{headerShown: false}} name="Adicionar" component={Adicionar} />
        <Stack.Screen options={{headerShown: false}} name="Lista" component={Lista} />
        <Stack.Screen options={{headerShown: false}} name="Emergencia" component={Emergencia} />
        <Stack.Screen options={{headerShown: false}} name="Orgaos" component={Orgaos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cont: {
   flex: 1,
   paddingTop: 22,
   
  },
  container: {
    flex: 1,
    
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  fundo:{
backgroundColor:'darkred'
  },
  textT:{
    textDecorationLine: 'underline',
    textAlign: 'center',
    collor: '',
  },
  text:{
    textDecorationLine: 'underline',
    textAlign: 'left',
    paddingLeft: 20,
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
    color:"black",
    paddingLeft: 20,
  },
  phoneNumber: {
    color: "black",
    paddingLeft: 20,
  },
  botao:{
    color:'darkred',
    textDecorationLine: 'underline',
  },
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
    borderBottomColor:"black"
  },
  teste: {
    height:1,
    backgroundColor:'grey'
  },
  imagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  
 
})

export default App;

