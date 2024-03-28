import React, {useState} from 'react';
import { View, Text, TouchableHighlight, ScrollView, Alert, AlertOptions, Modal, Image, Switch, FlatList, ImageBackground, TextInput, CheckBox, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';
import Login from './Login';

function Site({navigation,route}) {

  const [camisas,setCamisas] = useState(false)
  const [casacos,setCasacos] = useState(false)
  const [camisaLed,setCamisaLed] = useState(false)
  const [camisaBeatles,setCamisaBeatles] = useState(false)
  const [camisaQueen,setCamisaQueen] = useState(false)
  const [casacoGuns,setCasacoGuns] = useState(false)
  const [casacoAc,setCasacoAc] = useState(false)
  const [casacoFoo,setCasacoFoo] = useState(false)
  const [produtos,setProdutos] = useState(false)
  const [confirma,setConfirma] = useState(false)

  const [carrinho,setCarrinho] = useState()
  const [txtCam,setTxtCam] = useState()
  const [string,setString] = useState()
  const [string2,setString2] = useState()
  const [string3,setString3] = useState()
  const [bol,setBol] = useState()
  const [bolC,setBolC] = useState('')
  const [bol2,setBol2] = useState()
  const [bolC2,setBolC2] = useState('')
  const [txtPag,setTxtPag] = useState()
  const [txtPagC,setTxtPagC] = useState('white')

  const [mensagem,setMensagem] = useState("     Bem vindo ao Rock Paradise sua loja virtual de produtos de Rock. Aqui vendemos os mais diversos produtos relacionados ao gênero Rock. Para facilitar nossa venda, desenvolvemos este aplicativo. Clique na imagem a seguir para conferir os produtos disponíveis para compra:")
  const [menEng,setMenEng] = useState("     Welcome to Rock Paradise, your online store for Rock products. Here we sell the most diverse products related to the Rock genre. To facilitate our sale, we have developed this application. Click on the image below to see the products available for purchase:")
  const [camisa1,setCamisa1] = useState("CAMISA LED ZEPPELIN: R$ 64,90")
  const [camisa2,setCamisa2] = useState("CAMISA THE BEATLES: R$ 64,90")
  const [camisa3,setCamisa3] = useState("CAMISA QUEEN: R$ 64,90")
  const [casaco1,setCasaco1] = useState("CASACO GUNS N' ROSES: R$ 129,90")
  const [casaco2,setCasaco2] = useState("CASACO AC/DC: R$ 129,90")
  const [casaco3,setCasaco3] = useState("CASACO FOO FIGHTERS: R$ 129,90")

  var pCamisa = 64.9
  var pCasaco = 129.9

  const [eng,setEng] = useState(false)
  const [escuro,setEscuro] = useState(false)

  const [list, setList] = useState("")
  const [pesquisa,setPesquisa] = useState("")

  const [check,setCheck] = useState(false)
  const [check2,setCheck2] = useState(false)
  const [check3,setCheck3] = useState(false)
  const [check4,setCheck4] = useState(false)
  const [check5,setCheck5] = useState(false)
  const [check6,setCheck6] = useState(false)

  const userName = route.params.usuario.texto;  //para armazenar o nome do usuario da outra página

  function Ingles(eng){

    if(eng == true){

      setCamisa1("LED ZEPPELIN'S T-SHIRT: R$ 64,90")
      setCamisa2("THE BEATLES'S T-SHIRT: R$ 64,90")
      setCamisa3("QUEEN'S T-SHIRT: R$ 64,90")
      setCasaco1("GUNS N' ROSES'S HODDIE: R$ 129,90")
      setCasaco2("AC/DC'S HODDIE: R$ 129,90")
      setCasaco3("FOO FIGHTERS'S HODDIE: R$ 129,90")
      setTxtCam("Search here")

    }

    else{

      setCamisa1("CAMISA LED ZEPPELIN: R$ 64,90")
      setCamisa2("CAMISA THE BEATLES: R$ 64,90")
      setCamisa3("CAMISA QUEEN: R$ 64,90")
      setTxtCam("Pesquise aqui")

    }

  setProdutos(true)

  }

  function Carrinho(check,check2,check3){

    if(check == true || check2 == true || check3 == true){

      setCarrinho(pCamisa)

    }

      if(check4 == true || check5 == true || check6 == true){

        setCarrinho(pCasaco)

      }

      if(check == true && check2 == true || check == true && check3 == true || check2 == true && check3 == true){

        setCarrinho(pCamisa+pCamisa)

      }

      if(check4 == true && check5 == true || check4 == true && check6 == true || check5 == true && check6 == true){

        setCarrinho(pCasaco+pCasaco)

      }

      if(check == true && check4 == true || check == true && check5 == true || check == true && check6 == true || check2 == true && check4 == true || check2 ==   true && check5 == true || check2 == true && check6 == true || check3 == true && check4 == true || check3 == true && check5 == true || check3 == true && check6 == true){

        setCarrinho(pCamisa+pCasaco)

      }

      if(check == true && check4 == true && check5 == true || check == true && check5 == true && check6 == true || check == true && check4 == true && check6 == true ||check2 == true && check4 == true && check5 == true || check2 == true && check5 == true && check6 == true || check2 == true && check4 == true && check6 == true || check3 == true && check4 == true && check5 == true || check3 == true && check5 == true && check6 == true || check3 == true && check4 == true && check6 == true){

        setCarrinho(pCamisa+pCasaco+pCasaco-0.000000000000050)

      }

      if(check4 == true && check == true && check2 == true || check4 == true && check2 == true && check3 == true || check4 == true && check == true && check3 == true ||check5 == true && check == true && check2 == true || check5 == true && check2 == true && check3 == true || check5 == true && check == true && check3 == true || check6 == true && check == true && check2 == true || check6 == true && check2 == true && check3 == true || check6 == true && check == true && check3 == true){

        setCarrinho(pCasaco+pCamisa+pCamisa-0.000000000000050)

      }

      if(check == true && check4 == true && check5 == true && check6 == true || check2 == true && check4 == true && check5 == true && check6 == true || check3 == true && check4 == true && check5 == true && check6 == true){

        setCarrinho(pCamisa+pCasaco+pCasaco+pCasaco)

      }

      if(check4 == true && check == true && check2 == true && check3 == true || check5 == true && check == true && check2 == true && check3 == true || check6 == true && check == true && check2 == true && check3 == true){

        setCarrinho(pCasaco+pCamisa+pCamisa+pCamisa)

      }

      //2 camisas e 2 casacos

      if(check == true && check2 == true && check4 == true && check5 == true|| check == true && check2 == true && check4 == true && check6 == true || check == true && check2 == true && check5 == true && check6 == true || check == true && check3 == true && check4 == true && check5 == true || check == true && check3 == true && check5 == true && check6 == true || check == true && check3 == true && check4 == true && check6 == true || check2 == true && check3 == true && check4 == true && check5 == true || check2 == true && check3 == true && check5 == true && check6 == true || check2 == true && check3 == true && check4 == true && check6 == true){

        setCarrinho(pCamisa+pCamisa+pCasaco+pCasaco)

      }

      //2 camisas e 3 casacos

      if(check == true && check2 == true && check4 == true && check5 == true && check6 == true || check2 == true && check3 == true && check4 == true && check5 == true && check6 == true){

        setCarrinho(pCamisa+pCamisa+pCasaco+pCasaco+pCasaco)

      }

      //3 casacos e 2 camisas

      if(check4 == true && check5 == true && check == true && check2 == true && check3 == true || check5 == true && check6 == true && check == true && check2 == true && check3 == true){

        setCarrinho(pCasaco+pCasaco+pCamisa+pCamisa+pCamisa)

      }

      if(check == true && check2 == true && check3 == true && check4 == false && check5 == false && check6 == false){

        setCarrinho(pCamisa+pCamisa+pCamisa-0.000000000000020)

      }

      if(check4 == true && check5 == true && check6 == true && check == false && check2 == false && check3 == false){

        setCarrinho(pCasaco+pCasaco+pCasaco-0.000000000000050)

      }

      if(check == true && check2 == true && check3 == true && check4 == true && check5 == true && check6 == true){

        setCarrinho((pCamisa+pCamisa+pCamisa-0.000000000000020)+(pCasaco+pCasaco+pCasaco-0.000000000000050))

      }

      if(check == false && check2 == false && check3 == false && check4 == false && check5 == false && check6 == false){

        setCarrinho()

      }

  setPesquisa("")

  setProdutos(false)

  setCamisaLed(false)

  setCamisaBeatles(false)

  setCamisaBeatles(false)

  setCasacoGuns(false)

  setCamisas(false)

  setCasacos(false)

  }

  function Pesquisar(){

    setCamisaLed(false)

    setCamisaBeatles(false)

    setCamisaQueen(false)

    setCasacoGuns(false)

    setCasacoAc(false)

    setCasacoFoo(false)

    setCamisas(false)

    setCasacos(false)

    if(pesquisa == "Led Zeppelin" || pesquisa == "Led" || pesquisa == "led zeppelin" || pesquisa == "led" || pesquisa == "LED ZEPPELIN" || pesquisa == "LED" || pesquisa == "l" || pesquisa == "L"){

      setCamisaLed(true)

    }

      if(pesquisa == "The Beatles" || pesquisa == "The" || pesquisa == "the beatles" || pesquisa == "the" || pesquisa == "beatles" || pesquisa == "Beatles" ||  pesquisa == "bea" || pesquisa == "Bea" || pesquisa == "b" || pesquisa == "B"){

        setCamisaBeatles(true)

      }

      if(pesquisa == "Queen" || pesquisa == "queen" || pesquisa == "q" || pesquisa == "Q"){

        setCamisaQueen(true)

      }

      if(pesquisa == "Guns N' Roses" || pesquisa == "Guns" || pesquisa == "guns n' roses" || pesquisa == "guns" || pesquisa == "guns n roses" || pesquisa == "g" || pesquisa == "G"){

        setCasacoGuns(true)

      }

      if(pesquisa == "AC/DC" || pesquisa == "AC" || pesquisa == "ac" || pesquisa == "Ac" || pesquisa == "ac/dc" || pesquisa == "Ac/Dc" || pesquisa == "a" || pesquisa == "A"){

        setCasacoAc(true)

      }

      if(pesquisa == "Foo Fighters" || pesquisa == "foo fighters" || pesquisa == "Foo" || pesquisa == "foo" || pesquisa == "f" || pesquisa == "F"){

        setCasacoFoo(true)

      }

      if(pesquisa == "camisa"|| pesquisa == "CAMISA" || pesquisa == "cam" || pesquisa == "CAM"){

        setCamisas(true)

      }

      if(pesquisa == "casaco" || pesquisa == "CASACO" || pesquisa == "cas" || pesquisa == "CAS"){

        setCasacos(true)

      }

      if(pesquisa == ""){

        setCamisaLed(false)

        setCamisaBeatles(false)

        setCamisaQueen(false)

        setCasacoGuns(false)

        setCasacoAc(false)

        setCasacoFoo(false)

        setCamisas(false)

        setCasacos(false)

      }

  }

  function Pagar(string,string2,string3,bol){

    setConfirma(true)

    setString("")

    setString3("")

    setString2("")

    setBol("")

    setBol2("")

    setBolC(escuro?'black':'white')

    setBolC2(escuro?'black':'white')

    setTxtPagC(escuro?'black':'white')

  }

  function Boleto(string,string2,string3,bol){

    setString("Opção selecionada: Pagamento por boleto")

    setString3("")

    setString2("")

    setBol("")

    setBolC(escuro?'black':'white')

    setBol2("Imprimir Boleto")

    setBolC2('blue')

    setTxtPagC(escuro?'black':'white')

    if(eng==true){

      setString("Option selected: Payment by bank slip")

      setBol2("Print out the bank slip")

    }

  }

  function PIX(string,string2,string3){

    setString("Opção selecionada: Pagamento por PIX")

    setString3("")

    setString2("")

    setBol("")

    setBolC(escuro?'black':'white')

    setBol2("Realizar Compra")

    setBolC2('blue')

    setTxtPagC(escuro?'black':'white')

    if(eng==true){

      setString("Option selected: Payment by PIX")

      setString3("")

      setString2("")

      setBol2("Finish Purchase")

    }

  }

  function Cartao(string,string2,string3){

    setString("Opção selecionada: Pagamento por cartão")

    setString3("Digite o número do seu cartão:")

    setString2("Digite aqui")

    setBol("Realizar Compra")

    setBolC('blue')

    setBol2("")

    setBolC2(escuro?'black':'white')

    setTxtPag("")

    setTxtPagC(escuro?'white':'black')

    if(eng==true){

      setString("Option selected: Payment by credit card")

      setString3("Type your credit card number:")

      setString2("Type it here")

      setBol("Finish Purchase")

    }

  }

  function FinalizarBoleto(route){
    
    setConfirma(false)

    navigation.navigate("Pagamento", {usuario2: {userName}})

  }

  function Finalizar(route,txtPag){

    if (!txtPag){

      return;

    }
    
    setConfirma(false)

    navigation.navigate("Pagamento", {usuario2: {userName}})

  }

  return (

//backgroundColor: eng? 'white':'black' -> para fazer um modo escuro usando switch
//{route.params.texto}

      <View style = {{backgroundColor: escuro? 'black':'white'}}>

        <View style ={{flexDirection:'row'}}>

          <TouchableHighlight style = {{marginLeft:5}}
            onPress = {() => navigation.navigate("Login")}>
          
            <View>

              <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"SAIR"}</Text>

            </View>
          
          </TouchableHighlight>

          <Text style = {{color: escuro? 'white':'black', paddingLeft: 218}}>{userName}</Text>

        </View>

        <Modal visible = {produtos}>

          <ScrollView style = {{backgroundColor: escuro? 'black':'white'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style ={{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/camisaLed.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black', fontSize:15,height:30}}>{camisa1}</Text>

                <CheckBox value = {check} onValueChange = {setCheck} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/camisaBeatles.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom: 10,marginLeft:20,color: escuro? 'white':'black',fontSize:15,height:30}}>{camisa2}</Text>

                <CheckBox value = {check2} onValueChange = {setCheck2} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/camisaQueen.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black',fontSize:15,height:30}}>{camisa3}</Text>

                <CheckBox value = {check3} onValueChange = {setCheck3} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casGuns.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:5,color: escuro? 'white':'black',fontSize:15,height:30}}>{casaco1}</Text>

                <CheckBox value = {check4} onValueChange = {setCheck4} style = {{marginLeft:20,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casAC.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black', fontSize:15,height:30}}>{casaco2}</Text>

                <CheckBox value = {check5} onValueChange = {setCheck5} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casFoo.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:10,color: escuro? 'white':'black',fontSize:15,height:30}}>{casaco3}</Text>

                <CheckBox value = {check6} onValueChange = {setCheck6} style = {{marginLeft:20,marginTop:18}}/>

              </View>

            </View>

          </ScrollView>

        </Modal>

        <Modal visible = {camisas}>

          <ScrollView style = {{backgroundColor: escuro? 'black':'white'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style ={{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
              
                <Image source = {require('../Images/camisaLed.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

                <View style = {{flexDirection:'row'}}>
                
                  <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black', fontSize:15,height:30}}>{camisa1}</Text>

                  <CheckBox value = {check} onValueChange = {setCheck} style = {{marginLeft:35,marginTop:18}}/>

                </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/camisaBeatles.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom: 10,marginLeft:20,color: escuro? 'white':'black',fontSize:15,height:30}}>{camisa2}</Text>

                <CheckBox value = {check2} onValueChange = {setCheck2} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/camisaQueen.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black',fontSize:15,height:30}}>{camisa3}</Text>

                <CheckBox value = {check3} onValueChange = {setCheck3} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

          </ScrollView>

        </Modal>

        <Modal visible = {casacos}>

          <ScrollView style = {{backgroundColor: escuro? 'black':'white'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casGuns.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:5,color: escuro? 'white':'black',fontSize:15,height:30}}>{casaco1}</Text>

                <CheckBox value = {check4} onValueChange = {setCheck4} style = {{marginLeft:20,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casAC.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black', fontSize:15,height:30}}>{casaco2}</Text>

                <CheckBox value = {check5} onValueChange = {setCheck5} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casFoo.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:10,color: escuro? 'white':'black',fontSize:15,height:30}}>{casaco3}</Text>

                <CheckBox value = {check6} onValueChange = {setCheck6} style = {{marginLeft:20,marginTop:18}}/>

              </View>

            </View>

          </ScrollView>

        </Modal>

        <Modal visible = {camisaLed}>

          <View style = {{backgroundColor: escuro? 'black':'white', height: '100%'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style ={{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
              
                <Image source = {require('../Images/camisaLed.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

                <View style = {{flexDirection:'row'}}>
                
                  <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black', fontSize:15,height:30}}>{camisa1}</Text>

                  <CheckBox value = {check} onValueChange = {setCheck} style = {{marginLeft:35,marginTop:18}}/>

                </View>

            </View>

          </View>

        </Modal>

        <Modal visible = {camisaBeatles}>

          <View style = {{backgroundColor: escuro? 'black':'white', height: '100%'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/camisaBeatles.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom: 10,marginLeft:20,color: escuro? 'white':'black',fontSize:15,height:30}}>{camisa2}</Text>

                <CheckBox value = {check2} onValueChange = {setCheck2} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

          </View>

        </Modal>

        <Modal visible = {camisaQueen}>

          <View style = {{backgroundColor: escuro? 'black':'white', height: '100%'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/camisaQueen.png')} style = {{marginLeft:30,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black',fontSize:15,height:30}}>{camisa3}</Text>

                <CheckBox value = {check3} onValueChange = {setCheck3} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

          </View>

        </Modal>

        <Modal visible = {casacoGuns}>

          <View style = {{backgroundColor: escuro? 'black':'white', height: '100%'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casGuns.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:5,color: escuro? 'white':'black',fontSize:15,height:30}}>{casaco1}</Text>

                <CheckBox value = {check4} onValueChange = {setCheck4} style = {{marginLeft:20,marginTop:18}}/>

              </View>

            </View>

          </View>

        </Modal>

        <Modal visible = {casacoAc}>

          <View style = {{backgroundColor: escuro? 'black':'white', height: '100%'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casAC.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:20,color: escuro? 'white':'black', fontSize:15,height:30}}>{casaco2}</Text>

                <CheckBox value = {check5} onValueChange = {setCheck5} style = {{marginLeft:35,marginTop:18}}/>

              </View>

            </View>

          </View>

        </Modal>

        <Modal visible = {casacoFoo}>

          <View style = {{backgroundColor: escuro? 'black':'white', height: '100%'}}>

            <View style = {{flexDirection:'row', paddingBottom:25}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Carrinho(check,check2,check3)}>
          
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>

              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 200}}>{userName}</Text>

            </View>

            <View style = {{paddingBottom:25, flexDirection:'row'}}>

              <TextInput style = {{borderWidth: 2,backgroundColor:escuro?'white':'black',borderColor:'#0e4c69',marginLeft:10,marginRight:10,height:45,fontSize:20,
color: escuro?'black':'white'}} placeholder = {txtCam} value = {pesquisa} onChangeText = {(pesquisa) => setPesquisa(pesquisa)}></TextInput>

              <TouchableHighlight
               onPress = {() => Pesquisar()}>

                <Image source = {escuro? require('../Images/searchBlack.png'):require('../Images/search.png')} style = {{marginLeft:'130',justifyContent:'center'}}/>
                
              </TouchableHighlight>

            </View>

            <View style = {{borderWidth:3,borderColor: escuro? 'gray':'black'}}>
            
              <Image source = {require('../Images/casFoo.png')} style = {{marginLeft:50,marginTop:20,marginRight:50}}/>

              <View style = {{flexDirection:'row'}}>
              
                <Text style = {{marginTop: 15,marginBottom:10,marginLeft:10,color: escuro? 'white':'black',fontSize:15,height:30}}>{casaco3}</Text>

                <CheckBox value = {check6} onValueChange = {setCheck6} style = {{marginLeft:20,marginTop:18}}/>

              </View>

            </View>

          </View>

        </Modal>

        <Modal visible = {confirma}>

          <View style = {{backgroundColor: escuro? 'black':'white', height: '100%'}}>

            <View style = {{flexDirection:'row'}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => setConfirma(false)}>
              
                <View>

                  <Text style = {{color: escuro? 'white':'black'}}>{eng?"GO BACK":"VOLTAR"}</Text>

                </View>
              
              </TouchableHighlight>

              <Text style = {{color: escuro? 'white':'black', paddingLeft: 218}}>{userName}</Text>

            </View>

            <View style = {{paddingTop:20,paddingLeft:5}}>

              <Text style = {{color: escuro? 'white':'black',fontSize:35}}>{eng? "Choose a Way to Pay:" : "Escolha uma Forma de Pagamento:"}</Text>
          
            </View>

            <View style = {{flexDirection:'row'}}>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Boleto(string,string2,string3,bol)}>

                <View style = {{paddingLeft:10,paddingTop:20}}>

                  <View style = {{borderWidth:2,paddingTop:6,paddingBottom:12,backgroundColor:'white'}}>

                    <Image source = {require('../Images/iconeboleto.png')}/>
              
                  </View>

                </View>

              </TouchableHighlight>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => PIX(string,string2,string3)}>

                <View style = {{paddingTop:20}}>

                  <View style = {{paddingTop:10, borderWidth:2,paddingBottom:15, backgroundColor:'white'}}>

                    <Image source = {require('../Images/iconepix.png')}/>
              
                  </View>

                </View>

              </TouchableHighlight>

              <TouchableHighlight style = {{marginLeft:5}}
                onPress = {() => Cartao(string,string2,string3)}>

                <View style = {{paddingTop:20}}>

                  <View style = {{borderWidth:2,paddingTop:7,paddingBottom:8, backgroundColor:'white'}}>

                    <Image source = {require('../Images/iconecartao.png')}/>
              
                  </View>
              
                </View>

              </TouchableHighlight>

            </View>

            <View style = {{paddingTop:40,paddingLeft:15}}>

              <Text style = {{color: escuro? 'white':'black',fontSize:25}}>{string}</Text>
          
            </View>

            <View style = {{paddingTop:40,paddingLeft:15}}>

              <Text style = {{color: escuro? 'white':'black',fontSize:25}}>{string3}</Text>
          
            </View>

            <View style = {{paddingTop:20,paddingLeft:10}}>

              <TextInput style = {{borderWidth: 3,backgroundColor:escuro?'black':'white',borderColor:txtPagC,marginLeft:10,marginRight:10,height:45,fontSize:20,color: escuro?'white':'black'}} placeholder = {string2} placeholderTextColor = {escuro?'white':'black'} value = {txtPag} onChangeText = {(txtPag) => setTxtPag(txtPag)}></TextInput>
          
            </View>

            <View style = {{paddingTop:20,paddingLeft:15}}>

              <Text style = {{color: escuro? 'white':'black',fontSize:25}}>Total: R$ {carrinho}0</Text>
          
            </View>

            <TouchableHighlight style = {{marginLeft:5}}
              onPress = {() => Finalizar(route,txtPag)}>

                <View style = {{paddingTop:20, backgroundColor: escuro? 'black':'white'}}>

                  <View style = {{paddingTop:10,paddingBottom:5,paddingEnd:10,alignItems: "flex-end"}}>

                    <Text style = {{fontSize:20,height:50,padding:10,backgroundColor:bolC,color:'white'}}>{bol}</Text>
              
                  </View>
              
                </View>

            </TouchableHighlight>

            <TouchableHighlight style = {{marginLeft:5}}
              onPress = {() => FinalizarBoleto(route)}>

                <View style = {{paddingTop:20, backgroundColor: escuro? 'black':'white'}}>

                  <View style = {{paddingTop:10,paddingBottom:5,paddingEnd:10,alignItems: "flex-end"}}>

                    <Text style = {{fontSize:20,height:50,padding:10,backgroundColor:bolC2,color:'white'}}>{bol2}</Text>
              
                  </View>
              
                </View>

            </TouchableHighlight>
  
          </View>

        </Modal>

          <View style = {{paddingTop:20,paddingLeft:5}}>

            <Text style = {{color: escuro? 'white':'black',fontSize:40}}>{eng? "Welcome" : "Bem vindo"}</Text>
        
          </View>

        <View style = {{alignContent: 'center', alignItems: 'center', flexDirection: 1, paddingTop: 10}}>

          <View style = {{padding:10}}>

            <Text style = {{color: escuro? 'white':'black',fontSize:20}}>{eng? menEng : mensagem}</Text>
        
          </View>

          <TouchableHighlight style = {{marginLeft:5, marginBottom:100, marginTop:50}}
            onPress = {() => Ingles(eng)}>
        
            <View>

              <Image source = {require('../Images/produto.png')}/>

            </View>
        
          </TouchableHighlight>

          <Text style = {{color: escuro? 'white':'black'}}>{eng? "Change to dark theme:": "Mudar para o tema escuro:"}</Text>

          <Switch 
            value = {escuro}
            onValueChange = {setEscuro}
            />

          <Text style = {{color: escuro? 'white':'black'}}>{eng? "Change to english version:": "Mudar para a versão em inglês:"}</Text>

          <Switch 
            value = {eng}
            onValueChange = {setEng}
            />

          <View style = {{width:'98%',flexGrow:1,borderWidth:2,backgroundColor: 'red',margin:20,padding:20, borderRadius:25}}>

            <Text style = {{alignItems:'center'}}>Total: R$ {carrinho}0</Text>

            <TouchableHighlight style = {{}}
              onPress = {() => Pagar(string,string2,string3,bol)}>
        
            <View style = {{alignItems:'flex-end'}}>

              <Text style = {{width:80,height:33,fontSize:20,borderRadius:10,textAlign:'center',textAlignVertical:'center',backgroundColor: 'white',color: 'black'}}>{eng?'Pay':'Pagar'}</Text>

            </View>

            </TouchableHighlight>

          </View>

        </View>

      </View>

  );

}

export default Site;