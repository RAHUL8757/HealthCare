import {Dimensions, Platform, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    MainContainer: {
        justifyContent:"flex-end",
        alignContent:"flex-end",
        flex:1
    },
    Container : {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        backgroundColor:"green"
    },
    iconContainer : {
        width:"15%"
    },
    icon : {
        position:"absolute",
        right:10,
        bottom:30,
        backgroundColor:"red"
    },
   
  });
  export default Styles;