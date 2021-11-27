import { StatusBar } from 'expo-status-bar';
import React, {  useEffect, useState } from 'react';
import { 
  StyleSheet, Text, View, FlatList,
  SafeAreaView, Button, Image, TouchableOpacity,
  TextInput, Modal, Alert, ScrollView
  } from 'react-native';
import {FaCheckCircle, FaTrash, FaPen } from 'react-icons/fa'; // npm i react-icons

import axios from 'axios';
import css from './src/Css/css';
//import {} from 'react-dom'

 //import 'bootstrap/dist/css/bootstrap.min.css'

//import { ListGroupItemHeading } from 'reactstrap';
import * as Animatable from 'react-native-animatable';
import {Ionicons} from '@expo/vector-icons';


import trevo from './src/images/trevo.png'
import editar from './src/images/editar.png'
import excluir from './src/images/excluir.png'


 function App() {

  //CRIAR UM STATE PARA LISTA GERAL
  const [lista, setLista ] = useState([]);
  //CRIAR UM STATE PARA USUARIOS que vai ser um nome (string) e não uma lista
  const [nome, setNome ] = useState('');
 //CRIAR UM STATE PARA EMAIL que vai ser um email (string) e não uma lista
 const [email, setEmail ] = useState('');
 //CRIAR UM STATE PARA SENHA que vai ser um senha (string) e não uma lista
 const [senha, setSenha ] = useState('');
 ///CRIAR O STATE ID PARA NO CASO PODER PASSAR  DE EDITAR OU DELETAR
 const [id, setId ] = useState('');
 ///CRIAR O STATE PARA ABRIR MODAL
 const [abrir, setAbrir ] = useState('false');
 //CRIARCONSTANTE DE ENDEREÇO 
const api = 'http://localhost/apireact/';
  //const api = 'http://192.168.0.12/apireact/';
 
  function mensagemDelete (id) {
   
  
  
   // setAbrir(true);

    }
 
  

const mensagemDuplicidade = () =>
  Alert.alert(
    "Erro ao Salvar",
    "Email Já Cadastrado",
    [
      
      { text: "OK", onPress: () => setAbrir(true) }
    ],
    { cancelable: true }
  ); 


  const mensagemDadosIncorretos = () =>
  Alert.alert(
    "Erro ao Logar",
    "Dados Incorretos",
    [
      
      { text: "OK", onPress: () => setAbrirLogin(true) }
    ],
    { cancelable: true }
  ); 




 //ASSIM QUE FOR CARREGADO A TELA CHAMA A FUNÇÃO listarDados
useEffect( ()=> {
  setAbrir(false);
  //CRIAR METODO PARA LISTAR
  listarDados ()
     
   }, [])
  
 //VAMOS FAZER A FUNÇÃO listarDados, COMO VAI CHAMAR UMA API ela tem que ser ASYNC
 async function listarDados (){
 //  try {
  /* CRIAR UMA CONSTATNTE CHAMADA res 
   QUE VAI PEGAR RESULTADO LA NA API (QUE ESTA NO SERVIDOR LOCAL)
 */
 const res = await axios.get(api + 'listar.php')
 //Depois que veio o resultado passa os dados para o setLista (nesse caso passa o resultode 2 paramentro, suceeso e reesult)
 setLista(res.data.result);
//// //Vamos exibir no console.log para testar e pq  Ainda não temos TELA para MOSTRAR
 console.log(res.data.result)
//} catch (error) {
  // Tratar o erro adequadamente
//}
 }

 async function add(){
  const obj = {nome, email, senha, id};
  if(id > 0){

const res = await axios.post(api + 'editar.php', obj)
listarDados();
  console.log(res.data.sucess)
  }else{
    const res = await axios.post(api + 'add.php', obj)
    listarDados();
    
    console.log(res.data.sucess)
  }
  setAbrir(false);
  
 
 }

 
 async function getItem(id){
  const res = await axios.get(api + 'buscarId.php?id=' + id);
  setId(res.data.id);
  setNome(res.data.nome);
  setEmail(res.data.email);
  setSenha(res.data.senha);
  setAbrir(true);
 
}

async function deleteItem(id){
  const res = await axios.get(api + 'excluir.php?id=' + id);
  listarDados();
}


 function limparCampos(){
  setNome('');
  setEmail('');
  setSenha('');

}

return (

  <View>
    <View style={css.navbar}>

      <Text style={css.textonavbar}>Lista de Usuários</Text>
      <TouchableOpacity
        style={css.botao}
        onPress={() => setAbrir(true)}
      >
        <Ionicons name="ios-add" size={30} color="#FFF"></Ionicons>
      </TouchableOpacity>

    </View>

 <ScrollView>

 <View style={css.grid}>
    
    {lista.map(item => (
      <View style={css.griditem} key={item.id}><Text style={{color: '#585858'}}>{item.id} - {item.nome}</Text>

      <TouchableOpacity style={css.gridbotaoEditar}
           onPress={() => getItem(item.id)} >
             <Ionicons name="ios-create" size={30} color="#50b9e1"></Ionicons>
      </TouchableOpacity> 
      
      <TouchableOpacity style={css.gridbotaoExcluir}
         onPress={() => mensagemDelete(item.id)} >
            <Ionicons name="ios-trash" size={30} color="#e15f50"></Ionicons>
      </TouchableOpacity> 
     
                     
                  
      </View>

        
  ))}   
</View>

 </ScrollView>
 <Modal
      animationType="slide"
      transparent={false}
      visible={abrir}
      >
        <SafeAreaView style={css.modal}>

          

          <View style={css.modalHeader}>
          <TouchableOpacity
          onPress={ () => setAbrir(false)}
          >
          <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={35} color="#FFF"></Ionicons>
          </TouchableOpacity>
        <Text style={css.textoModal}>Inserir Usuário</Text>
        </View>

        <Animatable.View  
          animation="bounceInUp"
        useNativeDriver  >


        <TextInput 
        type="text"
      style={css.input}
      placeholder="Insira um Nome"
      value={nome}
      onChangeText={ (nome) => setNome(nome)}
      />

      <TextInput 
      style={css.input}
      placeholder="Insira seu Email"
      value={email}
      onChangeText={ (email) => setEmail(email)}
      />

<TextInput 
      style={css.input}
      placeholder="Insira sua Senha"
      value={senha}
      onChangeText={ (senha) => setSenha(senha)}
      />

      
      <TouchableOpacity  
      style={css.botaoModal}
      onPress={add}
      >
        <Text  style={css.textoBotaoModal}>Salvar</Text>
      </TouchableOpacity>
       

        </Animatable.View>

        </SafeAreaView>
 
      </Modal>
 
 </View>


)
}
export default App;
 

