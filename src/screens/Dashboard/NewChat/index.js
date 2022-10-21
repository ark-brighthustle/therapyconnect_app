/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
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
import ImageCropPicker from 'react-native-image-crop-picker';

import {
  GiftedChat,
  InputToolbar,
  Actions,
  ActionsProps,
  Bubble,
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
      resourcePath: '',
    };
  }

  // getAllMessages = async () => {
  //   const user1 = 1;
  //   const user2 = this.state.valueId;
  //   const docid = user2 > user1 ? user1 + '-' + user2 : user2 + '-' + user1;
  //   firebase
  //     .firestore()
  //     .collection('chatrooms')
  //     .doc(docid)
  //     .collection('messages')
  //     .orderBy('createdAt', 'desc')
  //     .get()
  //     .then(querySnap => {
  //       let cvs = querySnap.docs.map(docSnap => {
  //         return {
  //           ...docSnap.data(),
  //           createdAt: docSnap.data().createdAt.toDate(),
  //         };
  //       });
  //       this.setState({
  //         messages: cvs,
  //       });
  //       return cvs;
  //     })
  //     .catch(function (error) {
  //       console.log('Error getting documents: ', error);
  //     });
  // };

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
        const data = docSnap.data();
        if (data.createdAt) {
          return {
            ...docSnap.data(),
            createdAt: docSnap.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docSnap.data(),
            createdAt: new Date(),
          };
        }
      });
      this.setState({
        messages: cvs,
      });
      // return cvs;
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
        image: this.state.resourcePath,
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

    const handlePhotoPicker = () => {
      ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image.path);
        this.setState({
          resourcePath: image.path,
        });
      });
    };

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
            // textInputStyle={{
            //   backgroundColor: 'white',
            //   borderRadius: 20,
            //   paddingHorizontal: 12,
            //   marginRight: 5,
            //   marginBottom: 6,
            //   marginTop: 6,
            //   borderWidth: 0.5,
            //   borderColor: 'grey',
            // }}
            scrollToBottom
            // alwaysShowSend
            renderBubble={props => {
              return (
                <Bubble
                  {...props}
                  textStyle={{
                    right: {
                      color: Colors.white,
                    },
                    left: {
                      color: Colors.black,
                    },
                  }}
                  wrapperStyle={{
                    right: {
                      backgroundColor: Colors.headerColor,
                    },
                    left: {
                      backgroundColor: Colors.white,
                      marginLeft: -40,
                    },
                  }}
                />
              );
            }}
            renderInputToolbar={props => {
              return (
                <InputToolbar
                  {...props}
                  containerStyle={{
                    // backgroundColor: '#5aa272',
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 2,
                    borderRadius: 20,
                    paddingTop: 5,
                  }}
                />
              );
            }}
            renderActions={props => (
              <Actions
                {...props}
                containerStyle={{
                  position: 'absolute',
                  right: 50,
                  bottom: 5,
                  zIndex: 9999,
                }}
                onPressActionButton={() => handlePhotoPicker()}
                icon={() => <Ionicons name="camera" size={30} />}
              />
            )}
            timeTextStyle={{
              right: {color: Colors.black},
              left: {color: 'grey'},
            }}
            // renderMessageImage={props => {
            //   const {image, messageIdGenerator, user, onSend} = props;
            //   return (
            //     <TouchableOpacity
            //       style={{
            //         height: 40,
            //         width: 40,
            //         borderRadius: 40,
            //         backgroundColor: Colors.headerColor,
            //         alignItems: 'center',
            //         justifyContent: 'center',
            //         marginBottom: 5,
            //       }}
            //       onPress={() => {
            //         if (text && onSend) {
            //           onSend({
            //             text: text.trim(),
            //             user,
            //             _id: messageIdGenerator(),
            //           });
            //         }
            //       }}>
            //       <Ionicons name="send" size={20} color={Colors.white} />
            //     </TouchableOpacity>
            //   );
            // }}
            renderSend={props => {
              const {text, messageIdGenerator, user, onSend} = props;
              return (
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 40,
                    backgroundColor: Colors.headerColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 5,
                  }}
                  onPress={() => {
                    if (text && onSend) {
                      onSend({
                        text: text.trim(),
                        user,
                        _id: messageIdGenerator(),
                      });
                    }
                  }}>
                  <Ionicons name="send" size={20} color={Colors.white} />
                </TouchableOpacity>
              );
            }}
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
