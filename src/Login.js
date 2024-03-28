import React, {useState} from 'react';
import { View, Text, Button, TouchableHighlight, Alert,AlertOptions,Modal,Image,ImageBackground,TextInput,StyleSheet,Switch} from 'react-native';
import Constants from 'expo-constants';

function Login({navigation}){

  const [visivel,setVisivel] = useState(false)

  const [texto,setTexto] = useState("")
  const [texto2,setTexto2] = useState("")
  const [texto3,setTexto3] = useState("")
  const [texto4,setTexto4] = useState("")

  var [login,setLogin] = useState([["Joao", "abc1r1"], ["Jose", "fy63u*"], ["MaLu", "th678"], ["Luck", "lsji48se"], ["Hansol", "stwr478"],])

  var adicionar = [texto3,texto4]

  function Botlogin(texto,texto2,route){

  var i = 0

    for (i;i<(login.length);i++){

      if (texto == login[i][0] && texto2 == login[i][1]){

        navigation.navigate("Site", {usuario : {texto}})         //para passar o nome do usuario para outra página

      }

      else if (!texto || !texto2){

        return;
      
      }

    }

  setTexto("")
  setTexto2("")
  setGuest(texto)

  }

  function Cadastro(adicionar){

    if (!texto3 || !texto4){

      return;
      
    }

    login.push(adicionar)

    setTexto3("")
    setTexto4("")

    setVisivel(false)

  }

    return(

        <ImageBackground source = {require('../Images/fundoCinza.png')}  style = {{height:'100%'}}>
      
          <Modal visible = {visivel}>

            <ImageBackground source = {require('../Images/fundoCinza.png')}  style = {{height:'100%'}}>
          
              <Text style = {{fontSize:30,paddingTop:30, paddingLeft: 10, color: 'white'}}>Realize seu cadastro:</Text>

              <Text style = {{fontSize:20, paddingTop:30, paddingLeft: 10, paddingBottom: 10, color: 'white'}}>Nome:</Text>

              <TextInput style = {{borderWidth: 2,backgroundColor:'black',borderColor:'gray',marginLeft:10,marginRight:10,height:40,fontSize:19,
  color: 'gray'}} placeholder ='Digite Aqui' value = {texto3} onChangeText = {(texto3) => setTexto3(texto3)}></TextInput>

              <Text style = {{fontSize:20, paddingTop:30, paddingLeft: 10, paddingBottom: 10, color: 'white'}}>Senha:</Text>

              <TextInput style = {{borderWidth: 2,backgroundColor:'black',borderColor:'gray',marginLeft:10,marginRight:10,height:40,fontSize:19,
  color: 'gray'}} placeholder ='Digite Aqui' value = {texto4} onChangeText = {(texto4) => setTexto4(texto4)}></TextInput>

              <TouchableHighlight
                onPress = {() => Cadastro(adicionar)}>

              <View>

                <Text style = {{marginTop:30,marginBottom:10,fontSize:18,borderRadius:10,padding:8,alignSelf:'center',color: '#dbdbdb',backgroundColor:'black',borderWidth: 2,borderColor: 'gray'}}>Concluir Cadastro</Text>

              </View>

            </TouchableHighlight>
          
            <TouchableHighlight
              onPress = {() => setVisivel(false)}>

              <View>

                <Text style = {{marginTop:20,marginBottom:10,fontSize:18,borderRadius:10,padding:8,alignSelf:'center',color: '#dbdbdb',backgroundColor:'black',borderWidth: 2,borderColor: 'gray'}}>Voltar à Tela de login</Text>

              </View>

            </TouchableHighlight>

          </ImageBackground>

        </Modal>

        <View>

          <Image source = {require('../Images/iconeLogin.png')} style = {{marginTop:80,alignSelf:'center'}}/>

          <Text style = {{marginBottom: 10,alignSelf:'center',color:'white',fontSize:25}}>Rock Paradise</Text>

        </View>

        <View>

          <Text style = {{fontSize:20, paddingTop:30, paddingLeft: 10, paddingBottom: 10, color:'white'}}>Nome:</Text>

          <TextInput style = {{borderWidth: 2,backgroundColor:'black',borderColor:'gray',marginLeft:10,marginRight:10,height:40,fontSize:19,
      color: 'gray'}} placeholder ='Digite Aqui' value = {texto} onChangeText = {(texto) => setTexto(texto)}></TextInput>

          <Text style = {{fontSize:20, paddingTop:30, paddingLeft: 10, paddingBottom: 10, color:'white'}}>Senha:</Text>

          <TextInput style = {{borderWidth: 2,backgroundColor:'black',borderColor:'gray',marginLeft:10,marginRight:10,height:40,fontSize:19,
  color: 'gray'}} placeholder ='Digite Aqui' value = {texto2} onChangeText = {(texto2) => setTexto2(texto2)}></TextInput>

        </View>

        <View>

          <TouchableHighlight
            onPress = {() => Botlogin(texto,texto2)}>

            <View>

              <Text style = {{marginTop:30,marginBottom:10,fontSize:19,borderRadius:10,padding:8,alignSelf:'center',color: '#dbdbdb',backgroundColor:'black',borderWidth: 2,borderColor: 'gray'}}>Logar</Text>

            </View>

          </TouchableHighlight>

          <TouchableHighlight
            onPress = {() => setVisivel(true)}>

            <View>

              <Text style = {{marginTop:20,fontSize:18,borderRadius:10,alignSelf:'center',color: '#dbdbdb',padding:10,backgroundColor:'black',borderWidth: 2,borderColor: 'gray'}}>Realizar Cadastro</Text>

            </View>

          </TouchableHighlight>

        </View>

      </ImageBackground>

    );

}

export default Login;