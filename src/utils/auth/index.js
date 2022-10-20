// import { isEmpty } from 'lodash';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const TOKEN_KEY = 'jwtToken';
// const USER_INFO = 'userInfo';

// const parse = JSON.parse;
// const stringify = JSON.stringify;

// const auth = {
//     /**
//      * Remove an item from the used storage
//      * @param  {String} key [description]
//      */
//     clear(key) {
//         if (AsyncStorage && AsyncStorage.getItem(key)) {
//             return AsyncStorage.removeItem(key);
//         }

//         if (sessionStorage && sessionStorage.getItem(key)) {
//             return sessionStorage.removeItem(key);
//         }

//         return null;
//     },

//     /**
//      * Clear all app storage
//      */
//     // clearAppStorage() {
//     //     if (AsyncStorage) {
//     //         AsyncStorage.clear();
//     //     }

//     //     if (sessionStorage) {
//     //         sessionStorage.clear();
//     //     }
//     // },

//     clearToken(tokenKey = TOKEN_KEY) {
//         return auth.clear(tokenKey);
//     },

//     clearUserInfo(userInfo = USER_INFO) {
//         return auth.clear(userInfo);
//     },

//     /**
//      * Returns data from storage
//      * @param  {String} key Item to get from the storage
//      * @return {String|Object}     Data from the storage
//      */
//     get(key) {
//         if (AsyncStorage && AsyncStorage.getItem(key)) {
//             return parse(AsyncStorage.getItem(key)) || null;
//         }

//         if (sessionStorage && sessionStorage.getItem(key)) {
//             return parse(sessionStorage.getItem(key)) || null;
//         }

//         return null;
//     },

//     getToken(tokenKey = TOKEN_KEY) {
//         return auth.get(tokenKey);
//     },

//     getUserInfo(userInfo = USER_INFO) {
//         return auth.get(userInfo);
//     },

//     /**
//      * Set data in storage
//      * @param {String|Object}  value    The data to store
//      * @param {String}  key
//      * @param {Boolean} isAsyncStorage  Defines if we need to store in localStorage or sessionStorage
//      */
//     set(value, key, isAsyncStorage) {
//         if (isEmpty(value)) {
//             return null;
//         }

//         if (isAsyncStorage && AsyncStorage) {
//             return AsyncStorage.setItem(key, stringify(value));
//         }

//         if (sessionStorage) {
//             return sessionStorage.setItem(key, stringify(value));
//         }

//         return null;
//     },

//     setToken(value = '', isAsyncStorage = false, tokenKey = TOKEN_KEY) {
//         return auth.set(value, tokenKey, isAsyncStorage);
//     },

//     setUserInfo(value = '', isAsyncStorage = false, userInfo = USER_INFO) {
//         return auth.set(value, userInfo, isAsyncStorage);
//     },
// };

// export default auth;

// import {
//     ImageBackground,
//     StatusBar,
//     StyleSheet,
//     TouchableOpacity,
//     View,
//     SafeAreaView,
//   } from 'react-native';
//   import React, {useState, useEffect} from 'react';
//   import {Colors} from '../../../constants/colors';
//   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//   import Ionicons from 'react-native-vector-icons/Ionicons';
//   import TextComponent from '../../../components/TextComponent';
//   import {getWidth} from '../../../components/Dimensions';
//   import {useNavigation} from '@react-navigation/native';
//   import * as admin from '@react-native-firebase/app';

//   import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
//   import firestore, {firebase} from '@react-native-firebase/firestore';

//   const NewChat = () => {
//     const navigation = useNavigation();
//     const [messages, setMessages] = useState([]);

//     const getAllMessages = async () => {
//       const user1 = 1;
//       const user2 = 2;
//       const docid = user2 > user1 ? user1 + '-' + user2 : user2 + '-' + user1;
//       firebase
//         .firestore()
//         .collection('chatrooms')
//         .doc(docid)
//         .collection('messages')
//         .orderBy('createdAt', 'asc')
//         .get()
//         .then(function (querySnap) {
//           let cvs = querySnap.docs.map(docSnap => {
//             return {
//               ...docSnap.data(),
//               createdAt: docSnap.data().createdAt.toDate(),
//             };
//           });
//           setMessages(cvs);
//           // console.log(doc.data())
//           return cvs;
//         })
//         .catch(function (error) {
//           console.log('Error getting documents: ', error);
//         });
//       setMessages(allmsg);
//     };

//     useEffect(() => {
//       getAllMessages();
//     }, []);

//     const onSend = messageArray => {
//       const msg = messageArray[0];
//       const mymsg = {
//         ...msg,
//         sentBy: 1,
//         sentTo: 2,
//         createdAt: new Date(),
//       };
//       setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
//       const user1 = 1;
//       const user2 = 2;
//       const docid = user2 > user1 ? user1 + '-' + user2 : user2 + '-' + user1;
//       var FieldValue1 = admin.FieldValue;

//       firebase
//         .firestore()
//         .collection('chatrooms')
//         .doc(docid)
//         .collection('messages')
//         .add({...mymsg, createdAt: firestore.FieldValue.serverTimestamp()});
//     };

//     // const renderActions = useCallback(() => {
//     //   return (
//     //     <TouchableOpacity style={{marginBottom: 14, marginLeft: 8}}>
//     //       <Text>Add</Text>
//     //     </TouchableOpacity>
//     //   );
//     // }, []);

//     return (
//       <View className="flex w-full h-full">
//         <StatusBar
//           barStyle={'light-content'}
//           backgroundColor={Colors.headerColor}
//         />
//         <SafeAreaView>
//           <View
//             style={styles.main}
//             className="h-fit w-full bg-[#5aa272] flex flex-row p-2 pt-4 pb-4 items-center justify-between">
//             <Ionicons name="arrow-back" size={25} color={Colors.white} />
//             <View
//               style={{marginLeft: getWidth('-3%')}}
//               className="w-10 h-10 rounded-full bg-white"
//             />
//             <View className="gap-0.5" style={{marginLeft: getWidth('-1%')}}>
//               {/* <View className="flex flex-row"> */}
//               <TextComponent className1="text-lg text-white" isSemiBold={true}>
//                 Dr. Mariam Garcia
//               </TextComponent>
//               <View className="w-20 h-6 rounded-lg bg-green-900 justify-center items-center">
//                 <TextComponent className1="text-xs text-white" isMedium={true}>
//                   Allopathic
//                 </TextComponent>
//               </View>
//             </View>
//             <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')}>
//               <FontAwesome5 name="video" size={22} color={'white'} />
//             </TouchableOpacity>
//             <MaterialIcons name="call" size={22} color={'white'} />
//             <MaterialCommunityIcons
//               name="dots-vertical"
//               size={22}
//               color={'white'}
//             />
//           </View>
//         </SafeAreaView>
//         <ImageBackground style={{flex: 1, backgroundColor: '#f6f6f6'}}>
//           {/* source */}
//           <GiftedChat
//             messages={messages}
//             onSend={text => onSend(text)}
//             user={{
//               _id: 1,
//             }}
//             textInputStyle={{
//               backgroundColor: 'white',
//               borderRadius: 20,
//               paddingHorizontal: 12,
//               marginRight: 5,
//               marginBottom: 6,
//               marginTop: 6,
//               borderWidth: 0.5,
//               borderColor: 'grey',
//             }}
//             renderInputToolbar={props => {
//               return (
//                 <InputToolbar
//                   containerStyle={{backgroundColor: '#5aa272'}}
//                   {...props}
//                 />
//               );
//             }}
//             // renderActions={renderActions}
//           />
//         </ImageBackground>
//       </View>
//     );
//   };

//   export default NewChat;

//   const styles = StyleSheet.create({
//     main: {
//       borderBottomWidth: 0.5,
//       borderBottomColor: 'grey',
//     },
//   });
