import React from 'react';
import { Text, View,Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import Styles from './style'
import { Card, Title, Paragraph,Avatar} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Footer from '../Footer/Footer';
import { ScrollView } from 'react-native-gesture-handler';

const nursesData = [
  {
  name : "Selina Tom",
  role : "chief in Change",
  profilePic : "https://rahul.productdemourl.com/doctor3.webp",
  date : "09 Sept 2020",
  detail: "Curabitur bibendum, leo consequat bibendum, mauris risus sodales risus, st consectetur erat mangna nec nulls."
  },
  {
  name : "Ann Maria",
  role : "Lorem ipsum dolor",
  profilePic : "https://rahul.productdemourl.com/doctor1.jpg",
  date : "09 Sept 2020",
  detail: "Curabitur bibendum, leo consequat bibendum, mauris risus sodales risus, st consectetur erat mangna nec nulls."
  }]

class MedicalReport extends React.Component{
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
      <Card>
      <View style={Styles.CareContainer}>
      <View style={Styles.MadicalContainer}>
      <FontAwesome5
          name="microscope"
          color="#757373"
          size={40}
          style={{padding:5}}
      />
      <Card.Content>
      <Title>{item.name}</Title>
      <Paragraph>{item.role}</Paragraph>
      </Card.Content>
      </View>
      <MaterialCommunityIcons
          name="shield-star"
          color="green"
          size={40}
          style={{padding:5}}
      />
      </View>
      </Card>
      <View style={{padding:20}}>
      <Card.Content>
      <Paragraph style={{fontSize:18}}>{item.detail}</Paragraph>
      </Card.Content>
      </View>
      <View style={{justifyContent:"space-between",flexDirection:"row",padding:20}}>
        <Text style={{color:"#8f8c8c"}}>
          {item.date}
        </Text>
       <Image style={{width:50,height:30}} source={require('../../assets/signature.png')}/>
      </View>
      </Card>
    
    </View>
    
  )}
  </ScrollView>
   <Footer/>
    </View>
  );
}
}

export default MedicalReport;