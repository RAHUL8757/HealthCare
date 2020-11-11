import React from 'react';
import { Text, View,ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import Styles from './style'
import { Card, Title, Paragraph,Avatar} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Footer from '../Footer/Footer';

const nursesData = [
  {
  name : "Selina Tom",
  role : "chief in Change",
  profilePic : "https://rahul.productdemourl.com/doctor3.webp"
  },
  {
  name : "Ann Maria",
  role : "Lorem ipsum dolor",
  profilePic : "https://rahul.productdemourl.com/doctor1.jpg"
  }]
class Careteam extends React.Component{
  _goBack = () => {
    // this.props.navigation.navigate(AppRoutes.CARCOLLECTION)
  }
  
render(){
  return (
    <View style={Styles.Container}>
      <ScrollView>
    {nursesData.map((item,index) => 
    <View key={index} style={Styles.CardContainer}>
      
      <Card style={Styles.Card}>
      <View>
      <View style={Styles.CareContainer}>
      <Avatar.Image size={65} source={{uri :item.profilePic}} />
      <Card.Content>
      <Title>{item.name}</Title>
      <Paragraph>{item.role}</Paragraph>
      </Card.Content>
      </View>
      <View style={Styles.Line} />
      </View>
      <View style={Styles.BottomContainer}>
      <Title style={{fontSize:11}}>Lorem ipsum</Title>
      <View style={Styles.CareContainer}>
      <MaterialIcons
          name="chat"
          color="green"
          size={30}
          style={{padding:5}}
      />
      <MaterialIcons
          name="call"
          color="green"
          size={30}
          style={{padding:5}}
      />
      <MaterialIcons
          name="videocam"
          color="green"
          size={30}
          style={{padding:5}}
      />
      </View>
      </View>
      </Card>
    
    </View>
  )}
  </ScrollView>
   <Footer />
    </View>
  );
}
}

export default Careteam;