import React, {useState} from 'react';
import { View, Text, Button, TouchableHighlight, ScrollView, Alert,AlertOptions,Modal,Image,ImageBackground,TextInput,StyleSheet,Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';

function Pagamento({navigation,route}){

  const userName2 = route.params.usuario2.userName

  return(

    <ImageBackground source = {require('../Images/fundoCinza.png')} style = {{height:'100%'}}>

      <View>

        <View>

          <Text style = {{color:'white',paddingLeft:270}}>{userName2}</Text>

        </View>

        <View style = {{paddingTop:30,paddingLeft:5}}>

          <Text style = {{color:'white',fontSize:32}}>Pagamento Realizado</Text>
          
        </View>

        <View style = {{paddingTop:50,paddingLeft:5}}>

          <Text style = {{color:'white',fontSize:25}}>  Obrigado por comprar na Rock Paradise.</Text>
          
        </View>

        <View>

          <TouchableHighlight
            onPress = {() => navigation.navigate("Login")}>

            <View>

              <Text style = {{marginTop:20,fontSize:18,borderRadius:10,alignSelf:'center',color: '#dbdbdb',padding:10,backgroundColor:'black',borderWidth: 2,borderColor: 'gray'}}>Voltar a Tela de Login</Text>

            </View>

          </TouchableHighlight>

        </View>

      </View>

    </ImageBackground>

  );

}

export default Pagamento;