import React from 'react';
import {View,Image ,ScrollView} from 'react-native';
import { Appbar } from 'react-native-paper';
import Styles from './style'
import {Text, Card, Title, Paragraph,Avatar,Button,Divider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../Footer/Footer';

const nursesData = [
  {
  Time : "10:30",
  Interval: "Am",
  Blood : " Blood Check-up",
  BloodDetail : "Laboratorian has to come"
  },
  {
    Time : "10:30",
    Interval: "Am",
    Blood : " Blood Check-up",
    BloodDetail : "Laboratorian has to come"
  }]

class Profile extends React.Component{
  
render(){
  return (
    <View style={Styles.container}>
    <ScrollView>
    <View style={Styles.cardContainer}>
      <Card style={{backgroundColor:'rgb(70, 199 , 12)'}}>
      <View style={Styles.careContainer}>
      <View style={Styles.madicalContainer}>
      <Avatar.Image size={65} source={{uri : "https://rahul.productdemourl.com/doctor1.jpg"}} />
      <Card.Content>
      <Title style={Styles.title}> Hello!</Title>
      <Paragraph style={Styles.userName}>John Smith</Paragraph>
      </Card.Content>
      </View>
      </View>
      <View style={{paddingLeft:20,paddingRight:20}}>
      <Card.Content>
      <Paragraph style={{fontSize:18,color:"#fff"}}>Lorem ipsum dolor sit amet,</Paragraph>
      <Paragraph style={{fontSize:18,color:"#fff"}}>consectetur adipiscing elit.</Paragraph>
      </Card.Content>
      </View>
      <View style={Styles.medicationInfoContainer}>
      <Button labelStyle={{color:"green"}} style={Styles.medicationInfo} icon="medical-bag" mode="contained" onPress={() => console.log('Pressed')}>
      Medication Info
      </Button>
      </View>
      </Card>
    <View style={Styles.todaySchedule}>
    <View style={{flexDirection:"row"}}>
    <MaterialCommunityIcons
          name="clock-time-four-outline"
          color="green"
          size={20}
      />
    <Text style={{paddingLeft:8,color:"#8f8c8c"}}>
     TODAY'S SCHEDULE
    </Text>
    </View>
    <Text style={{color:"#287d01"}}>
      02 Sept, Monday
    </Text>
    </View>
    <ScrollView style={{padding:20}} directionalLockEnabled={true} horizontal={true}>
    {nursesData.map((item,index) =>
    <View style={Styles.dataInternal}>
    <Card key={index} style={Styles.date}>
    <View style={{flexDirection:"row"}}>
    <Card.Content>
      <Paragraph style={Styles.timeParagraph}>{item.Time}</Paragraph>
      <Paragraph style={Styles.intervalParagraph}> {item.Interval}</Paragraph>
      </Card.Content>
      <Card.Content>
      <Paragraph style={Styles.blood}> {item.Blood}</Paragraph>
      <Paragraph style={Styles.bloodDetail}>{item.BloodDetail}</Paragraph>
      </Card.Content>
      </View>
    </Card>
    <View style={{width:200}}/>
    </View>
     )}
    </ScrollView>
    <View style={Styles.mainMedicalReportsContainer}>
    <View style={Styles.mainMedicalReportsContainerOfColor}>
    <View style={Styles.medicalReportsContainer}>
    <View style={Styles.medicalReports}>
    <MaterialCommunityIcons
          name="clipboard-text-multiple"
          color="green"
          size={24}
      />
    <Text> Find the Medical Reports</Text>
    </View>
    <Button labelStyle={{color:"#fff"}} style={Styles.dateData} mode="contained" onPress={() => console.log('Pressed')}>
    02 Nov
    </Button>
    </View>
    <Divider />
    <View style={Styles.mainCareTeamContainer}>
    <View style={Styles.mainCareTeamMainContainer}>
    <View style={Styles.careTeamContainer}>
    <MaterialIcons
          name="people-alt"
          color="green"
          size={24}
      />
    <Text> Connect to Care Team</Text>
    </View>
    <Image style={Styles.imageOne} source={require('../../assets/doctor1.jpg')}/>
    <Image style={Styles.imageTwo} source={require('../../assets/doctor2.jpg')}/>
    <Image style={Styles.imageThree} source={require('../../assets/doctor3.webp')}/>
    </View>
    </View>
    <Divider />
    </View>
    </View>
    </View>
    <View style={Styles.servicesContainer}>
    <MaterialCommunityIcons
          name="clock-time-four-outline"
          color="green"
          size={20}
      />
    <Text style={Styles.servicesText}>
     SERVICES ON DEMAND
    </Text>
    </View>
    </ScrollView>
   <Footer/>
    </View>
  );
}
}

export default Profile;