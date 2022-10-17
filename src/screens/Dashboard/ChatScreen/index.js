// /* eslint-disable prettier/prettier */
// import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Button } from 'react-native'
// import React, { useState, useEffect, useRef } from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import { Colors } from '../../../constants/colors'
// import Entypo from 'react-native-vector-icons/Entypo'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import TextComponent from '../../../components/TextComponent'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import io from "socket.io-client";
// import useChat from "./Hook";
// import { getHeight, getWidth } from '../../../components/Dimensions'
// import auth from "../../../utils/auth";
// import {getChat, getMedicalReports} from "../../../core/Api/userActivity";

// const SERVER_URL = "https://socket.tcapi.supersyntax.in";
// const JWT_TOKEN = auth.getToken();
// const user = auth.getUserInfo();
// const socket = io(SERVER_URL);

// const ChatScreen = () => {

//     const [click, setClick] = useState(false);
//     const messagesEndRef = useRef(null)
//     const imageRef = useRef();

//     const [message, setMessage] = useState("");
//     const [reports, setReports] = useState();
//     const { messages, sendMessage } = useChat("test", "Vivek Pandey", "40");
//     const [newMessage, setNewMessage] = useState(""); // Message to be sent

//     useEffect(() => {
//       const medicalReports = async () => {
//         const response = await getMedicalReports(user.id);
//         if (response.status === 200) {
//           setReports(response.data.data);
//         }
//       }
//       medicalReports();
//       scrollToBottom()
//     }, []);

//     function handleChange(e){
//       setMessage(e.target.value);
//     }

//     const handleSendMessage = () => {
//       console.log(message);
//       sendMessage(message);
//       scrollToBottom()
//     };

//     // const handleFileUpload = (e) => {
//     //   e.preventDefault();
//     //   imageRef.current.click();
//     // }

//     // const handleFileUploadProcess = (e) => {
//     //   e.preventDefault();
//     //   const file = e.target.files[0];
//     //   console.log(file);
//     // }

//     const scrollToBottom = () => {
//       if (messagesEndRef) {
//         messagesEndRef.current.addEventListener('DOMNodeInserted', event => {
//           const { currentTarget: target } = event;
//           target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
//         });
//       }
//     }

//     return (
//         <View className="w-full h-full">
//             <StatusBar
//                 barStyle={'light-content'}
//                 backgroundColor={Colors.headerColor}
//             />
//             <View className="h-fit w-full bg-[#5aa272] flex flex-row p-2 pt-4 pb-4 items-center justify-between">
//                 <Ionicons
//                     name='arrow-back'
//                     size={25}
//                     color={Colors.white}
//                 />
//                 <View
//                     style={{ marginLeft: getWidth("-3%") }}
//                     className="w-10 h-10 rounded-full bg-white"
//                 />
//                 <View
//                     className="gap-0.5"
//                     style={{ marginLeft: getWidth("-1%") }}
//                 >
//                     <TextComponent
//                         className1="text-lg text-white"
//                         isSemiBold={true}
//                     >
//                         Dr. Mariam Garcia
//                     </TextComponent>
//                     <View className="w-20 h-6 rounded-lg bg-green-900 justify-center items-center">
//                         <TextComponent
//                             className1="text-xs text-white"
//                             isMedium={true}
//                         >
//                             Allopathic
//                         </TextComponent>
//                     </View>
//                 </View>
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('VideoScreen')}
//                 >
//                     <FontAwesome5
//                         name="video"
//                         size={22}
//                         color={'white'}
//                     />
//                 </TouchableOpacity>
//                 <MaterialIcons
//                     name="call"
//                     size={22}
//                     color={'white'}
//                 />
//                 <MaterialCommunityIcons
//                     name="dots-vertical"
//                     size={22}
//                     color={'white'}
//                 />
//             </View>
//             <View className="w-full bg-white p-4" style={{ height: "78%"}}>
//             { messages ?
//                 <ScrollView style={{ width: "100%"}} showsVerticalScrollIndicator={false}>
//             {console.log("position", messages)}
//                     <View className="mt-5">
//                         <View className="flex flex-row gap-2 w-full items-center">
//                             <View className="w-8 h-8 rounded-full bg-green-500" />
//                             <View>
//                                 <TextComponent className1="text-sm mb-1">Dr.Mariam, 8:30</TextComponent>
//                                 <View className="flex flex-row items-center gap-5">
//                                     <View className="bg-[#F6FAF8] rounded-tr-lg rounded-br-lg rounded-bl-lg w-52 p-3">
//                                         <TextComponent>Lorem ipsum dolor sit amet, consectetur adipiscing.</TextComponent>
//                                     </View>
//                                     <TouchableOpacity onPress={() => setClick(!click)}>
//                                         <AntDesign name={click ? 'hearto' : 'heart'} size={15} color={click ? Colors.black : Colors.red} />
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                     <View className="mt-5">
//                         <View className="w-full items-end">
//                             <TextComponent className1="text-sm mb-1">Sumeet, 8:30</TextComponent>
//                             <View className="bg-[#F6FAF8] rounded-tl-lg rounded-br-lg rounded-bl-lg w-64 p-3">
//                                 <TextComponent>Sed do eiusmod tempor incididunt.</TextComponent>
//                             </View>
//                         </View>
//                     </View>
//                 </ScrollView>
//                 : null
//             }
//             </View>
//             <View className="h-20 w-full bg-[#5aa272] border-t border-[#EBF4F3]">
//                 <View className="flex flex-row justify-between items-center p-5">
//                     <Entypo name='attachment' size={20} />
//                     <View className="bg-white pl-3 w-56">
//                         <TextInput
//                             placeholder='Message ...'
//                             multiline={false}
//                             value={message}
//                             onChange={(e) => {handleChange(e)}}
//                             // onKeyPress={(e) => {if (e.key === 'Enter') {handleSendMessage()}}}
//                             // leftButtons={[
//                             //     <ImAttachment onClick={handleFileUpload} />,
//                             // ]}
//                             rightButtons={<Button text={"Send Message"} onClick={handleSendMessage} title="Send Message" backgroundColor="#FF6B18" />}
//                         />
//                     </View>
//                     <SimpleLineIcons name='emotsmile' size={20} onPress={handleSendMessage} />
//                     <MaterialIcons name='keyboard-voice' size={20} />
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default ChatScreen
