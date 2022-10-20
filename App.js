/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import * as firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAvcCF63ACbciUmM3-JMo3jCSBoZjMdMZQ',
  authDomain: 'chat-app-62326.firebaseapp.com',
  databaseURL: 'https://chat-app-62326-default-rtdb.firebaseio.com',
  projectId: 'chat-app-62326',
  storageBucket: 'chat-app-62326.appspot.com',
  messagingSenderId: '306354353495',
  appId: '1:306354353495:web:01dcccb829a873554b7a12',
  measurementId: 'G-XM4JDQ0TXG',
};
const fireApp = firebase.default.initializeApp(firebaseConfig);
// console.log(fireApp);

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
