// import React, { Component } from "react";
// import {
//     SafeAreaView,
//     TouchableOpacity,
//     Text,
//     TextInput,
//     View,
//     FlatList,
// } from "react-native";
// import {
//     MeetingProvider,
//     useMeeting,
//     useParticipant,
//     MediaStream,
//     RTCView,
// } from "@videosdk.live/react-native-sdk";
// import { createMeeting, token } from "../../../../api";

// class VideoScreen extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             meetingId: "",
//             meetingVal: "",
//         }
//     }
//     // const[meetingId, setMeetingId] = useState('');
//     render() {
//         const getMeetingId = async (id) => {
//             console.log("hello2", id);
//             var meetingId1 = id == null ? await createMeeting({ token }) : id;
//             // const meetingId = id == null ? await createMeeting({ token }) : id;
//             console.log("hello3", meetingId1);
//             // await setMeetingId(meetingId);
//             // setMeetingId(meetingId);
//             await this.setState({
//                 meetingId: meetingId1
//             })
//             console.log("hello4", this.state.meetingId);
//             // ControlsContainer()
//         };

//         const JoinScreen = () => {
//             // const [meetingVal, setMeetingVal] = useState("");
//             return (
//                 <SafeAreaView
//                     style={{
//                         flex: 1,
//                         backgroundColor: "#F6F6FF",
//                         justifyContent: "center",
//                         paddingHorizontal: 6 * 10,
//                     }}
//                 >
//                     <TouchableOpacity
//                         onPress={() => {
//                             console.log("hii");
//                             getMeetingId();
//                             console.log("hello", this.state.meetingId);
//                         }}
//                         style={{ backgroundColor: "#1178F8", padding: 12, borderRadius: 6 }}
//                     >
//                         <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
//                             Create Meeting
//                         </Text>
//                     </TouchableOpacity>

//                     <Text
//                         style={{
//                             alignSelf: "center",
//                             fontSize: 22,
//                             marginVertical: 16,
//                             fontStyle: "italic",
//                             color: "grey",
//                         }}
//                     >
//                         ---------- OR ----------
//                     </Text>
//                     <TextInput
//                         value={this.state.meetingVal}
//                         onChangeText={(text) => this.setState({ meetingVal: text })}
//                         placeholder={"XXXX-XXXX-XXXX"}
//                         style={{
//                             padding: 12,
//                             borderWidth: 1,
//                             borderRadius: 6,
//                             fontStyle: "italic",
//                         }}
//                     />
//                     <TouchableOpacity
//                         style={{
//                             backgroundColor: "#1178F8",
//                             padding: 12,
//                             marginTop: 14,
//                             borderRadius: 6,
//                         }}
//                         onPress={() => {
//                             getMeetingId(this.state.meetingVal);
//                         }}
//                     >
//                         <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
//                             Join Meeting
//                         </Text>
//                     </TouchableOpacity>
//                 </SafeAreaView>
//             );
//         };

//         const Button = ({ onPress, buttonText, backgroundColor }) => {
//             return (
//                 <TouchableOpacity
//                     onPress={onPress}
//                     style={{
//                         backgroundColor: backgroundColor,
//                         justifyContent: "center",
//                         alignItems: "center",
//                         padding: 12,
//                         borderRadius: 4,
//                     }}
//                 >
//                     <Text style={{ color: "white", fontSize: 12 }}>{buttonText}</Text>
//                 </TouchableOpacity>
//             );
//         };

//         const ControlsContainer = (join, leave, toggleWebcam, toggleMic) => {
//             console.log("u r in controller");
//             return (
//                 <View
//                     style={{
//                         padding: 24,
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                     }}
//                 >
//                     <Button
//                         onPress={() => {
//                             join();
//                         }}
//                         buttonText={"Join"}
//                         backgroundColor={"#1178F8"}
//                     />
//                     <Button
//                         onPress={() => {
//                             toggleWebcam();
//                         }}
//                         buttonText={"Toggle Webcam"}
//                         backgroundColor={"#1178F8"}
//                     />
//                     <Button
//                         onPress={() => {
//                             toggleMic();
//                         }}
//                         buttonText={"Toggle Mic"}
//                         backgroundColor={"#1178F8"}
//                     />
//                     <Button
//                         onPress={() => {
//                             leave();
//                         }}
//                         buttonText={"Leave"}
//                         backgroundColor={"#FF0000"}
//                     />
//                 </View>
//             );
//         };

//         const ParticipantView = ({ participantId }) => {
//             const { webcamStream, webcamOn } = useParticipant(participantId);
//             return webcamOn ? (
//                 <RTCView
//                     streamURL={new MediaStream([webcamStream.track]).toURL()}
//                     objectFit={"cover"}
//                     style={{
//                         height: 300,
//                         marginVertical: 8,
//                         marginHorizontal: 8,
//                     }}
//                 />
//             ) : (
//                 <View
//                     style={{
//                         backgroundColor: "grey",
//                         height: 300,
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
//                 </View>
//             );
//         };

//         const ParticipantList = ({ participants }) => {
//             return participants.length > 0 ? (
//                 <FlatList
//                     data={participants}
//                     renderItem={({ item }) => {
//                         return <ParticipantView participantId={item} />;
//                     }}
//                 />
//             ) : (
//                 <View
//                     style={{
//                         flex: 1,
//                         backgroundColor: "#F6F6FF",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
//                 </View>
//             );
//         };

//         const MeetingView = () => {
//             console.log("In meeting view");
//             // Get `participants` from useMeeting Hook
//             const { join, leave, toggleWebcam, toggleMic } = useMeeting({});
//             // const participantsArrId = [...participants.keys()]; // Add this line

//             return (
//                 <View style={{ flex: 1 }}>
//                     console.log("In meeting view1");
//                     {/* <ParticipantList participants={participantsArrId} /> // Pass participants */}
//                     <ControlsContainer
//                         join={join}
//                         leave={leave}
//                         toggleWebcam={toggleWebcam}
//                         toggleMic={toggleMic}
//                     />
//                     console.log("In meeting view2");
//                 </View>
//             );
//         };

//         const { meetingId } = this.state;

//         return meetingId ? (
//             console.log("hii", meetingId),
//             <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
//                 <MeetingProvider
//                     config={{
//                         meetingId,
//                         micEnabled: false,
//                         webcamEnabled: true,
//                         name: "Test User",
//                     }}
//                     token={token}
//                 // {console.log("hii", meetingId)}
//                 >
//                     <MeetingView />
//                     {console.log("hii2", meetingId)}
//                 </MeetingProvider>
//                 {console.log("hii3", meetingId)}
//             </SafeAreaView>
//         ) : (
//             <JoinScreen />
//         );
//     }
// };

// export default VideoScreen