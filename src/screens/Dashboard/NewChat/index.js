/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {Colors} from '../../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from '../../../components/TextComponent';
import {getHeight, getWidth} from '../../../components/Dimensions';
import {useNavigation} from '@react-navigation/native';

import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const NewChat = () => {
  const navigation = useNavigation();
  // const [click, setClick] = useState(false);

  // const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = messageArray => {
    const msg = messageArray[0];
    const mymsg = {
      ...msg,
      sentBy: 1,
      sentTo: 2,
      createdAt: new Date(),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
    const user1 = 1;
    const user2 = 2;
    const docid = user2 > user1 ? user1 + '-' + user2 : user2 + '-' + user1;
    firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .add({...mymsg, createdAt: firestore.FieldValue.serverTimeStamp()});
  };

  const renderActions = useCallback(() => {
    return (
      <TouchableOpacity style={{marginBottom: 14, marginLeft: 8}}>
        <Text>Add</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View className="flex w-full h-full">
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.headerColor}
      />
      <SafeAreaView>
        <View
          style={styles.main}
          className="h-fit w-full bg-[#5aa272] flex flex-row p-2 pt-4 pb-4 items-center justify-between">
          <Ionicons name="arrow-back" size={25} color={Colors.white} />
          <View
            style={{marginLeft: getWidth('-3%')}}
            className="w-10 h-10 rounded-full bg-white"
          />
          <View className="gap-0.5" style={{marginLeft: getWidth('-1%')}}>
            {/* <View className="flex flex-row"> */}
            <TextComponent className1="text-lg text-white" isSemiBold={true}>
              Dr. Mariam Garcia
            </TextComponent>
            <View className="w-20 h-6 rounded-lg bg-green-900 justify-center items-center">
              <TextComponent className1="text-xs text-white" isMedium={true}>
                Allopathic
              </TextComponent>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')}>
            <FontAwesome5 name="video" size={22} color={'white'} />
          </TouchableOpacity>
          <MaterialIcons name="call" size={22} color={'white'} />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={22}
            color={'white'}
          />
        </View>
      </SafeAreaView>
      <ImageBackground style={{flex: 1, backgroundColor: '#f6f6f6'}}>
        {/* source */}
        <GiftedChat
          messages={messages}
          onSend={text => onSend(text)}
          user={{
            _id: 1,
          }}
          textInputStyle={{
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 12,
            marginRight: 5,
            marginBottom: 6,
            marginTop: 6,
            borderWidth: 0.5,
            borderColor: 'grey',
          }}
          renderInputToolbar={props => {
            return (
              <InputToolbar
                containerStyle={{backgroundColor: '#5aa272'}}
                {...props}
              />
            );
          }}
          renderActions={renderActions}
        />
      </ImageBackground>
    </View>
  );
};

export default NewChat;

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
});
