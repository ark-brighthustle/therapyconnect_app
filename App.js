/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import * as firebase from '@react-native-firebase/app';
import {firebaseConfig} from './config';

firebase.default.initializeApp(firebaseConfig);
const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
    // <View className="bg-red-500">
    //   <Text className="text-white">hii</Text>
    // </View>
  );
};

export default App;
