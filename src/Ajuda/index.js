import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Video } from 'expo-av';
import { IconButton, Colors } from 'react-native-paper';

 function Home({ navigation }) {
  return (
    <View style={styles.cont}>
      <ScrollView>
        <Text style={styles.titleText}>SELECIONE O TÓPICO DESEJADO</Text><Text></Text>
   <Button color='darkred' title="Acidente na Estrada" onPress={() => navigation.navigate('Acidente')}/><Text></Text>
   <Button color='darkred' title="Afogamento" onPress={() => navigation.navigate('Afogamento')}/><Text></Text>
   <Button color='darkred' title="Adulto Engasgado" onPress={() => navigation.navigate('AdultoEngasgando')}/><Text></Text>
   <Button color='darkred' title="Bebê Engasgado" onPress={() => navigation.navigate('BebeEngasgando')}/><Text></Text>
   <Button color='darkred' title="Choque Elétrico" onPress={() => navigation.navigate('Choque')}/><Text></Text>
   <Button color='darkred' title="Crise Convulsiva" onPress={() => navigation.navigate('Convulsao')}/><Text></Text>
   <Button color='darkred' title="Ferida Grave" onPress={() => navigation.navigate('Ferida')}/><Text></Text>
   <Button color='darkred' title="Hemorragia" onPress={() => navigation.navigate('Hemorragia')}/><Text></Text>
   <Button color='darkred' title="Incêndio" onPress={() => navigation.navigate('Incendio')}/><Text></Text>
   <Button color='darkred' title="Preparar seu Kit de Emergência" onPress={() => navigation.navigate('Kit')}/><Text></Text>
   <Button color='darkred' title="Alertar os serviços de emergência" onPress={() => navigation.navigate('Ligacao')}/><Text></Text>
   <Button color='darkred' title="Posição Lateral de Segurança" onPress={() => navigation.navigate('Posicao')}/><Text></Text>
   <Button color='darkred' title="Queimadura Grave" onPress={() => navigation.navigate('Queimadura')}/><Text></Text>
   <Button color='darkred' title="Ressuscitação Cardiopulmonar (RCP)" onPress={() => navigation.navigate('Ressuscitacao')}/><Text></Text>
   <Button color='darkred' title="Membros Cortados" onPress={() => navigation.navigate('Membros')}/>
   
   <Text></Text>
   </ScrollView>
  </View>
);
}

function  Acidente({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/acidente.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender a tomar medidas de segurança caso presencie um acidente de trânsito.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Em acidentes na estrada ou na rua, é fundamental assegurar o bem estar das vítimas e sinalizar o local antes de mais nada
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />
        

      </View>
     
    </View>
);
}

function  AdultoEngasgando({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/adultoEngasgado.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Este vídeo explica o que fazer no caso de um adulto engasgado.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Engasgamentos são a causa de muitas mortes no mundo. Técnicas simples para podem salvar pessoas vítimas de um acidente que, a primeiro momento, parece banal.
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  BebeEngasgando({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/bebeEngasgado.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Este vídeo explica o que fazer no caso de um bebê engasgado.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Engasgamentos são a causa de muitas mortes no mundo. Técnicas simples para podem salvar pessoas vítimas de um acidente que, a primeiro momento, parece banal.
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Choque({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/choque.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender a prestar socorro à uma vítima de choque elétrico.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Há três situações possíveis: vítima consciente, vítima inconsciente que respira e vítima inconsciente que não respira.
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Convulsao({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/convulsao.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Este vídeo dá orientações básicas do que fazer em caso de crise convulsiva.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Crises convulsivas podem ter causas diversas, mas as medidas a se tomar nesses casos são sempre as mesmas. Quanto mais rápido a vítima for assistida, maiores são as chances de evitar lesões.
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Ferida({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/ferida.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender a tratar um ferida grave.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Um ferimento é considerado grave se for profundo, se contiver corpos estranhos, se estiver próximo de algum orifício do corpo, se estiver associado a uma hemorragia grave ou se a vítima apresentar sinais de contusão.
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Hemorragia({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/hemorragia.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender a prestar os primeiros socorros a uma pessoa que está sangrando.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

É importante aplicar pressão sobre a ferida usando luvas limpas, usando uma sacola plástica ou um pano. Isso pode prevenir infecções.
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Incendio({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/incendio.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender que ações tomar em caso de um incêndio em domicílio.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Neste caso, é preciso considerar a origem do incêndio.
        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Kit({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/kit.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender a preparar um kit de primeiros socorros com tudo que é necessário para administrar os primeiros socorros em uma pessoa ferida.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Ligacao({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/ligacao.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Nesse vídeo você vai aprender a alertar corretamente os serviços de emergência.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Se você testemunhar um acidente: faça uma rápida análise da situação e do estado das vítimas e ligue imediatamente para os serviços de emergência. No Brasil, os números de telefone são os seguintes: Bombeiros - 193, PM - 190, Defesa Civil - 199, SAMU - 192

        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Membros({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/membros.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender a prestar os primeiros socorros a uma pessoa com um membro cortado.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Coloque luvas, se disponíveis, e imediatamente aplique pressão sobre o ferimento com um tecido limpo ou um saco plástico. Ligue para os serviços de emergência logo em seguida.

        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Posicao({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/posicao.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai aprender como colocar uma pessoa inconsciente que respira normalmente em uma posição lateral de segurança.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Nesta posição, é preciso deitar a pessoa de costas e certificar-se de que as pernas estejam próximas ao eixo do corpo.

        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Queimadura({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/queimadura.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Neste vídeo, você vai conhecer os primeiros socorros a serem adotados em caso de uma queimadura grave.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Uma queimadura é considerada grave quando:
- A superfície queimada é maior do que a metade da palma da mão da vítima
- É profunda
- Ocorre em zonas críticas, como rosto, mãos, áreas próximas aos orifícios ou às articulações
- É de origem química ou elétrica

        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Ressuscitacao({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/ressucitacao.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Siga esses conselhos caso você presencie uma vítima de parada cardíaca.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Em caso de primeiros socorros, a ressuscitação cardiopulmonar (RCP) deve ser aplicada rapidamente de maneira correta. É preciso aplicar esse método corretamente para que ele seja bem sucedido.

        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}
function  Afogamento({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text></Text>
      <IconButton
           icon="arrow-left" onPress={() => navigation.navigate('Home')} color={'black'}
           size={30}/>
      <Video
        ref={video}
        style={styles.video}
        source={require("./videos/afogamento.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        
        <Text  style={styles.text}>
        Este vídeo dá orientações básicas do que fazer em caso de afogamento.

Este vídeo faz parte do programa "Primeiros socorros" que explica o que fazer em várias situações de risco para sua saúde ou sua vida.

Casos de afogamento são muito mais comuns do que parece. Uma atitude rápida e correta pode significar a diferença entre a vida e a morte em um acidente deste tipo.

        </Text>
        <Button color='darkred' title="Reproduzir" onPress={() => video.current.playFromPositionAsync(0)} />

      </View>
     
    </View>
);
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}}  name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Acidente" component={Acidente} />
        <Stack.Screen options={{headerShown: false}} name="AdultoEngasgando" component={AdultoEngasgando} />
        <Stack.Screen options={{headerShown: false}} name="BebeEngasgando" component={BebeEngasgando} />
        <Stack.Screen options={{headerShown: false}} name="Choque" component={Choque} />
        <Stack.Screen options={{headerShown: false}} name="Convulsao" component={Convulsao} />
        <Stack.Screen options={{headerShown: false}} name="Ferida" component={Ferida} />
        <Stack.Screen options={{headerShown: false}} name="Hemorragia" component={Hemorragia} />
        <Stack.Screen options={{headerShown: false}} name="Incendio" component={Incendio} />
        <Stack.Screen options={{headerShown: false}} name="Ligacao" component={Ligacao} />
        <Stack.Screen options={{headerShown: false}} name="Membros" component={Membros} />
        <Stack.Screen options={{headerShown: false}} name="Posicao" component={Posicao} />
        <Stack.Screen options={{headerShown: false}} name="Queimadura" component={Queimadura} />
        <Stack.Screen options={{headerShown: false}} name="Ressuscitacao" component={Ressuscitacao} />
        <Stack.Screen options={{headerShown: false}} name="Afogamento" component={Afogamento} />
        <Stack.Screen options={{headerShown: false}} name="Kit" component={Kit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cont: {
   flex: 1,
   paddingTop: 22,
   
  },
  title:{
    fontSize:25,
    textAlign: 'center',
    flex:1,
    color:'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  },
  text: {
    textAlign: 'justify',
  },
  titleText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
 
})

export default App;
