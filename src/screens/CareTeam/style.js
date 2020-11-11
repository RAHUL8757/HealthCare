import {Dimensions, Platform, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    Container: {
      flex: 1,
    },
    CardContainer : {
    paddingLeft:20,
    paddingBottom:10,
    paddingTop:10,
    paddingRight:20
    },
    CareContainer : {
      flexDirection:"row"
    },
    Card : {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding:20
    },
    Line: {
        borderBottomWidth:1,
        borderColor:"#d9d9d9",
        width:"75%",
        left:"25%"
    },
    BottomContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        top:10
    },
    // aboutUsDiscription: {
    //   fontSize: 20,
    //   marginTop: '3%',
    //   width: '95%',
    //   margin: 5,
    //   color:"#000"
    // },
    // MainSendButtom :{
    //   paddingLeft:10,
    //   paddingRight:10
    // },
    // donoted: {
    //   fontSize: 14,
    //   fontWeight: 'bold',
    //   padding: 30,
    //   textAlign: "center",
    //   alignItems:"center",
    //   color:"#000"
    // },
    // text : {
    //   color:"#fff"
    // },
    // buttom : {
    //   width:"100%",
    //   backgroundColor:"#0088CC",
    //   borderColor:"#000"
    // }
  });
  export default Styles;