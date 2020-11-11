import React from 'react'
import MainScreen from './screens/Main'
import {View} from 'react-native'
import Careteam from './screens/CareTeam/CareTeam'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MedicalReport from './screens/MedicalReport/MedicalReport';
import Profile from './screens/Profile/profile';

const Stack = createStackNavigator();
export default class App extends React.Component{
    render(){
        return(
            <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ gestureEnabled: false }}
            >
            <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{ title: 'Health Care' }}
            />
            <Stack.Screen
            name="Care Team"
            component={Careteam}
            /> 
             <Stack.Screen
            name="Medical Report"
            component={MedicalReport}
            /> 
             <Stack.Screen
            name="Profile"
            component={Profile}
            /> 
            </Stack.Navigator>
            </NavigationContainer>
        )
      }
    }