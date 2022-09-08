import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/Dashboard/HomeScreen';
import HealthPackage from '../screens/Dashboard/HealthPackage';
import Root from './Root';
import ConsultantPhysician from '../screens/Dashboard/ConsultantPhysician';
import DoctorInfo from '../screens/Dashboard/DoctorInfo';
import HealthyLife from '../screens/Dashboard/HealthyLife';
import SlotPatient from '../screens/Dashboard/SlotPatient';
import SearchTherapist from '../screens/Dashboard/SearchTherapist';
import ChatScreen from '../screens/Dashboard/ChatScreen';
import PackageDetails from '../screens/Dashboard/PackageDetails';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Health Package" component={HealthPackage}
        options={{ headerStyle: { backgroundColor: '#5aa272' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }}
      />
      <Stack.Screen name="Package Details" component={PackageDetails}
        options={{ headerStyle: { backgroundColor: '#5aa272' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }}
      />
      <Stack.Screen name="Consultant Physician" component={ConsultantPhysician}
        options={{ headerStyle: { backgroundColor: '#5aa272' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }}
      />
      <Stack.Screen name="Doctor Info" component={DoctorInfo}
        options={{ headerStyle: { backgroundColor: '#5aa272' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }}
      />
      <Stack.Screen name="Healthy Life" component={HealthyLife}
        options={{ headerTitle: "HEALTHLY LIFE #7", headerStyle: { backgroundColor: '#5aa272' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }}
      />
      <Stack.Screen name="Slot Patient" component={SlotPatient}
        options={{ headerStyle: { backgroundColor: '#5aa272' }, headerTitle: "Select Slot & Patient", headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }}
      />
      <Stack.Screen name="Search Therapist" component={SearchTherapist}
        options={{ headerStyle: { backgroundColor: '#5aa272' }, headerTitle: "Search Therapist", headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }}
      />
      <Stack.Screen name="Chat Screen" component={ChatScreen} options={{ headerShown: false }} />
      {/* headerBackground: { backgroundColor: '#5aa272' } */}
    </Stack.Navigator>
  )
}

export default AppStack