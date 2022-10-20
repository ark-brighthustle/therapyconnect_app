/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import {Colors} from '../../../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from '../../../components/TextComponent';
import {getWidth} from '../../../components/Dimensions';
import * as admin from '@react-native-firebase/app';

import {
  GiftedChat,
  InputToolbar,
  Actions,
  ActionsProps,
} from 'react-native-gifted-chat';
import firestore, {firebase} from '@react-native-firebase/firestore';

export default class NewChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      valueId: props.route.params.key,
      name: props.route.params.name,
      therapy: props.route.params.therapy,
      valueType: props.route.params.mode,
    };
  }

  getAllMessages = async () => {
    const user1 = 1;
    const user2 = this.state.valueId;
    const docid = user2 > user1 ? user1 + '-' + user2 : user2 + '-' + user1;
    firebase
      .firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnap => {
        let cvs = querySnap.docs.map(docSnap => {
          return {
            ...docSnap.data(),
            createdAt: docSnap.data().createdAt.toDate(),
          };
        });
        this.setState({
          messages: cvs,
        });
        return cvs;
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
  };

  componentDidMount = () => {
    // this.getAllMessages();

    const user1 = 1;
    const user2 = this.state.valueId;
    const docid = user2 > user1 ? user1 + '-' + user2 : user2 + '-' + user1;
    const messageRef = firebase
      .firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    messageRef.onSnapshot(querySnap => {
      let cvs = querySnap.docs.map(docSnap => {
        return {
          ...docSnap.data(),
          createdAt: docSnap.data().createdAt.toDate(),
        };
      });
      this.setState({
        messages: cvs,
      });
      return cvs;
    });
  };

  render() {
    const {navigation} = this.props;

    const onSend = messageArray => {
      const msg = messageArray[0];
      const mymsg = {
        ...msg,
        sentBy: 1,
        sentTo: 2,
        createdAt: new Date(),
      };
      this.setState(previousMessages => ({
        messages: GiftedChat.append(previousMessages.messages, mymsg),
      }));
      const user1 = 1;
      const user2 = this.state.valueId;
      const docid = user2 > user1 ? user1 + '-' + user2 : user2 + '-' + user1;
      var FieldValue1 = admin.FieldValue;

      firebase
        .firestore()
        .collection('chatrooms')
        .doc(docid)
        .collection('messages')
        .add({...mymsg, createdAt: firestore.FieldValue.serverTimestamp()});
    };

    // const renderActions = ({props}) => {
    //   return (
    //     <Actions
    //       {...props}
    //       options={{
    //         ['Send Image']: handlePickImage,
    //       }}
    //       icon={() => (
    //         <Icon
    //           name={'attachment'}
    //           size={28}
    //           color={AppTheme.colors.primary}
    //         />
    //       )}
    //       onSend={args => console.log(args)}
    //     />
    //   );
    // };

    const renderActions = props => {
      return (
        <Actions
          {...props}
          options={{
            ['Document']: props => {
              console.log('document');
            },
            Cancel: props => {
              console.log('Cancel');
            },
          }}
          icon={() => (
            <Ionicons
              name={'add'}
              size={28}
              color={'#0077ff'}
              style={{left: 0, bottom: 0}}
            />
          )}
          onSend={args => console.log(args)}
        />
      );
    };

    // const renderActions = useCallback(() => {
    //   return (
    //     <TouchableOpacity style={{marginBottom: 14, marginLeft: 8}}>
    //       <Text>Add</Text>
    //     </TouchableOpacity>
    //   );
    // }, []);

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
            <View style={{marginLeft: getWidth('-2%')}}>
              <TextComponent className1="text-lg text-white" isSemiBold={true}>
                {this.state.name}
              </TextComponent>
              <View
                className=" rounded-lg bg-green-900 justify-center items-center p-1.5"
                style={{marginLeft: getWidth('-1%')}}>
                <TextComponent className1="text-xs text-white">
                  {this.state.therapy}
                </TextComponent>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoScreen')}>
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
          <GiftedChat
            messages={this.state.messages}
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
            // alwaysShowSend
            // renderSend={renderSend}
            // renderBubble={props => {
            //   return (
            //     <Bubble
            //       {...props}
            //       wrapperStyle={{
            //         right: {
            //           backgroundColor: '#efc100',
            //         },
            //         left: {
            //           marginLeft: -40,
            //         },
            //       }}
            //     />
            //   );
            // }}
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
  }
}

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
});
