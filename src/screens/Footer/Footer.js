import React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Card, Title, Paragraph,Avatar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './style'

class Footer extends React.Component{

render(){
  return (
  <View style={Styles.MainContainer}>
    <View style={Styles.Container}>
    <MaterialCommunityIcons
    name="phone-plus"
    color="#fff"
    size={30}
    style={{padding:5}}
    />
    <FontAwesome5
    name="comment-medical"
    color="#fff"
    size={30}
    style={{padding:5}}
    />
    <Entypo
    name="dial-pad"
    color="#fff"
    size={30}
    style={{padding:5}}
    />
    <View style={Styles.iconContainer}/>
    </View>
    <Avatar.Icon style={Styles.icon} size={80} icon="phone-in-talk" />
    </View>
  );
}
}

export default Footer;