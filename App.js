import * as React from 'react';
import { View, Text, Button, TouchableHighlight, Alert,AlertOptions,Modal,Image,ImageBackground,TextInput,StyleSheet,Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';
import Login from './src/Login';
import Site from './src/Site';
import Pagamento from './src/Pagamento';

function App() {

  const Stack = createStackNavigator()

  return (

      <NavigationContainer>
    
        <Stack.Navigator initialRouteName = "Login"
          screenOptions = {{headerShown: false}}>

          <Stack.Screen name = "Login" component = {Login}/>
          <Stack.Screen name = "Site" component = {Site}
            options = {{
              title: "Inicio",
              headerStyle:{backgroundColor: "#888"},
              headerTitleAlign: 'center',
              headerColor: "#fff"
            }}/>
          <Stack.Screen name = "Pagamento" component = {Pagamento}
            options = {{
              title: "Pagamento",
              headerStyle:{backgroundColor: "#888"},
              headerTitleAlign: 'center',
              headerColor: "#fff"
            }}/>

        </Stack.Navigator>

      </NavigationContainer>

  );

}

export default App;