import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../screens/Dashboard/HomeScreen';
import HealthPackage from '../screens/Dashboard/HealthPackage';
import Root from './Root';
import ConsultantPhysician from '../screens/Dashboard/ConsultantPhysician';
import DoctorInfo from '../screens/Dashboard/DoctorInfo';
import HealthyLife from '../screens/Dashboard/HealthyLife';
import SlotPatient from '../screens/Dashboard/SlotPatient';
import SearchTherapist from '../screens/Dashboard/SearchTherapist';
// import ChatScreen from '../screens/Dashboard/ChatScreen';
import PackageDetails from '../screens/Dashboard/PackageDetails';
import OnlineConsult from '../screens/Dashboard/OnlineConsult';
import OfflineConsult from '../screens/Dashboard/OfflineConsult';
import BookDiagnostics from '../screens/Dashboard/BookDiagnostics';
import OrderMedicines from '../screens/Dashboard/OrderMedicines';
import WellnessSolutions from '../screens/Dashboard/WellnessSolutions';
import MoreTherapists from '../screens/Dashboard/MoreTherapists';
import TextComponent from '../components/TextComponent';
import SplashScreen from '../screens/Auth/SplashScreen';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import ConnectAdvisor from '../screens/Dashboard/ConnectAdvisor';
// import ChatScreen1 from '../screens/Dashboard/ChatScreen1';
import VideoScreen from '../screens/Dashboard/VideoScreen';
import NewChat from '../screens/Dashboard/NewChat';
// import Demo from '../screens/Dashboard/Demo';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Root"
        component={Root}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConnectAdvisor"
        component={ConnectAdvisor}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Advisor
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Therapists"
        component={MoreTherapists}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Therapists
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Health Package"
        component={HealthPackage}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Health Package
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Package Details"
        component={PackageDetails}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Package Details
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Consultant Physician"
        component={ConsultantPhysician}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Consultant Physician
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Doctor Info"
        component={DoctorInfo}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Doctor Info
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Healthy Life"
        component={HealthyLife}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              HEALTHLY LIFE #7
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Slot Patient"
        component={SlotPatient}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Select Slot & Patient
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Search Therapist"
        component={SearchTherapist}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Search Therapist
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Online Consultation"
        component={OnlineConsult}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Online Consultation
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Offline Consultation"
        component={OfflineConsult}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Offline Consultation
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Order Medicines"
        component={OrderMedicines}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Order Medicines
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Book Diagnostics"
        component={BookDiagnostics}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Book Diagnostics
            </TextComponent>
          ),
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Wellness Solutions"
        component={WellnessSolutions}
        options={{
          headerStyle: {backgroundColor: '#5aa272'},
          headerTitle: () => (
            <TextComponent
              className1={'text-xl text-center text-white'}
              isSemiBold={true}>
              Wellness Solutions
            </TextComponent>
          ),
          // headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
        }}
      />
      {/* <Stack.Screen
        name="Chat Screen"
        component={ChatScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="NewChat"
        component={NewChat}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Chat Screen1"
        component={ChatScreen1}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Demo"
        component={Demo}
        options={{ headerShown: false }}
      /> */}
      {/* headerBackground: { backgroundColor: '#5aa272' } */}
    </Stack.Navigator>
  );
};

export default AppStack;
