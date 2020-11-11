import React from 'react'
import {View,Text,ImageBackground,StatusBar,StyleSheet,Dimensions} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar, Title } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from './Footer/Footer';

export default class MainScreen extends React.Component{
    render(){
        const image = { uri: "https://rahul.productdemourl.com/doctor1.jpg" };
        return(
            <View style={{flex:1}}>
            <View style={{justifyContent:"space-between",flexDirection:"row",padding:20,backgroundColor:"green"}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Care Team')}>
            <Text style={{color:"#fff"}} >NURSES</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Medical Report')}>
            <Text style={{color:"#fff"}}> MEDICAL REPORTS</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={{color:"#fff"}}> PROFILE</Text>
            </TouchableOpacity> 
            </View>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>Click on the options above to go across the app</Text>
            </ImageBackground>
            <Footer />
           </View>
        )
      }
    }
    const styles = StyleSheet.create({
        image: {
          resizeMode: "cover",
          justifyContent: "center",
          flex:11
        },
        text: {
          color: "white",
          fontSize: 42,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000a0"
        }
      });