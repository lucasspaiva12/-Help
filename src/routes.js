import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Agenda from './Agenda';
import Ajuda from './Ajuda';
import Ligacao from './Ligacao';
import Sos from './SOS';

import { Feather, AntDesign, Foundation} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function Routes(){
    return(
        <Tab.Navigator >

            <Tab.Screen  name ="Emergência" component={Agenda} options= {{tabBarIcon: ({size,color}) => (<Feather name="alert-triangle" size={size} color ={'darkred'}/>  )  }} />

            <Tab.Screen   name ="Ligação" component={Ligacao} options= {{tabBarIcon: ({size,color}) => (<Feather name="phone-call" size={size} color ={'darkred'}/>  )  }} />

            <Tab.Screen name ="Seus Contatos" component={Sos} options= {{tabBarIcon: ({size,color}) => ( <AntDesign name="book" size={size} color ={'darkred'}/>)  }}  /> 

            <Tab.Screen name ="Ajuda" component={Ajuda} options= {{tabBarIcon: ({size,darkred}) => (<AntDesign name="medicinebox" size={size} color ={'darkred'} />  )  }} />

           
            
        </Tab.Navigator>
    )
}
