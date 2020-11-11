import {Dimensions, Platform, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff"
    },
    cardContainer : {
    width: Dimensions.get('window').width,
    },
    careContainer : {
      flexDirection:"row",
      justifyContent:"space-between",
      padding : 20
    },
    madicalContainer : {
        flexDirection:"row", 
        top:10,
        padding:10
    },
    card : {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    date : {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding:10
    },
    line: {
        borderBottomWidth:1,
        borderColor:"#d9d9d9",
        width:"75%",
        left:"25%"
    },
    bottomContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        top:10
    },
    dataInternal: {
        paddingLeft:5,
        paddingBottom:5,
        paddingRight:5
    },
    title : {
        fontSize:20,
        color:"#fff"
    },
    userName: {
        fontSize:28,
        color:"#fff",
        paddingTop:8
    },
    imageOne : {
        width:40,
        height:40,
        borderRadius:50,
        position:"absolute",
        right:20,
        top:10
    },
    imageTwo : {
        width:40,
        height:40,
        borderRadius:50,
        position:"absolute",
        right:30,
        top:10
    },
    imageThree : {
        width:40,
        height:40,
        borderRadius:50,
        position:"absolute",
        right:45,
        top:10
    },
    servicesContainer : {
        flexDirection:"row",
        paddingLeft:20
    },
    servicesText : {
        paddingLeft:8,
        color:"#8f8c8c"
    },
    mainCareTeamContainer : {
        backgroundColor:"#d9d9d9"
    },
    mainCareTeamMainContainer : {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15
    },
    careTeamContainer : {
        flexDirection:"row",
        top:5
    },
    dateData : {
        backgroundColor:'rgb(70, 199 , 12)',
        borderRadius:50
    },
    mainMedicalReportsContainer : {
        padding:20
    },
    mainMedicalReportsContainerOfColor : {
        backgroundColor:"#d9d9d9"
    },
    medicalReportsContainer : {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15
    },
    medicalReports : { 
        flexDirection:"row",
        top:5
    },
    timeParagraph : {
        fontSize:20,
        color:"#287d01"
    },
    intervalParagraph : {
        fontSize:16,
        color:"#287d01",
        paddingTop:8
    },
    blood : {
        fontSize:20,
        color:"#287d01"
    },
    bloodDetail : {
        fontSize:14,
        color:"#287d01",
        paddingTop:8
    },
    medicationInfo : {
        backgroundColor:"#fff",
        borderRadius:50,
        padding:10
    },
    medicationInfoContainer : {
        justifyContent:"space-between",
        flexDirection:"row",
        padding:20
    },
    todaySchedule : {
        justifyContent:"space-between",
        flexDirection:"row",
        padding:20,
        backgroundColor:"#fff"
    }

  });
  export default Styles;