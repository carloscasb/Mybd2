import { StyleSheet } from "react-native";


 const css = StyleSheet.create({

     container: {
         flex: 1,
         alignItems: 'center',
       
        

     },
     container__center: {
         justifyContent: 'center',
         alignItems: 'center',
     },

     item: {
         flexDirection:'row',
         width: '100%',
         backgroundColor: "#f9c2ff",
         padding: 20,
         marginVertical: 8,
         //marginHorizontal:20,
        textAlign:'left',
        justifyContent:'space-between'
     },

     buttonImageIconStyle: {
        padding: 10, 
        margin: 5, 
        height: 25, 
        width: 25, 
        resizeMode: 'stretch', 
       
      },

  // TouchableOpacity , texto uma ao lado do outro
    CustonButton:{
        flexDirection:'row',
        marginLeft:'80%',
        justifyContent:'space-around',
        marginTop:50,
        marginBottom:20,
     
    },

     text:{
        
     },

     button: {
      position:'absolute',
      marginRight:30,
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 80,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
       

     doidinha:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'

     },


     modal:{
        flex: 1,
        backgroundColor:'#b2b2b2'
        
      },
    
      textoModal:{
        
        color: '#FFF',
        
        marginLeft: 15,
        fontSize:25,
        
        
      },
    
      modalHeader:{
        
       marginLeft:10,
       marginTop:20,
       alignItems:'center',
       flexDirection:'row',
       marginBottom:30,
        
      },
    
    
      input:{
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: 8,
        padding: 8,
        color: '#000',
        fontSize:13
      },
      botaoModal:{
        backgroundColor: '#00335c',
        borderRadius: 5,
        margin: 5,
        padding: 12,
        color: '#FFF',
        alignItems:'center',
        justifyContent:'center',
        
      },
      textoBotaoModal:{
        fontSize:16,
        color:'#FFF',
    
      },
    
      navbar:{
        backgroundColor: '#00335c',
        padding: 12,
        color: '#FFF',
        flexDirection:'row',
        marginTop: 35,
    
      },
    
      textonavbar:{
        fontSize:20,
        color:'#FFF',
        marginTop: 4,
        marginBottom: 2,
      },
    
      botao:{
        position: 'absolute', 
        right: 13,
        marginTop: 11,
      },
    
    
      grid:{
        marginTop: 8,
        
      },
    
      griditem:{
        padding: 11,
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: StyleSheet.hairlineWidth
      },
    
      gridbotaoEditar:{
        position: 'absolute',
        right:40,
        color:'#5c7ef6',
      },
    
      gridbotaoExcluir:{
        position: 'absolute',
        right:15,
        color:'#cc1414',
      },
    
      inputBuscar:{
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: 8,
        padding: 8,
        color: '#000',
        fontSize:15,
        borderBottomColor: "#767676",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:'100%',
        position:'relative',
        
      },
    
      ViewinputBuscar:{
        flexDirection:'row',
      },
    
      iconeBuscar:{
        position:'absolute',
        right:20,
        top: 15,
      }

    
}) 
export default css;
