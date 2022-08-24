import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
// import Registration from '../screens/Auth/Registration';
import HomeScreen from '../screens/Dashboard/HomeScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {/* <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack