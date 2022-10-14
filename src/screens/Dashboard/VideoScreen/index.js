/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// 'use strict';
import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    FlatList,
    PermissionsAndroid
} from 'react-native';
import {
    MeetingProvider,
    useMeeting,
    useParticipant,
    MediaStream,
    RTCView,
} from '@videosdk.live/react-native-sdk';
import { createMeeting, token } from './../../../../api';

const JoinScreen = props => {
    const [meetingVal, setMeetingVal] = useState('');
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#F6F6FF',
                justifyContent: 'center',
                paddingHorizontal: 6 * 10,
            }}>
            <TouchableOpacity
                onPress={() => {
                    props.getMeetingId();
                }}
                style={{ backgroundColor: '#1178F8', padding: 12, borderRadius: 6 }}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18 }}>
                    Create Meeting
                </Text>
            </TouchableOpacity>

            <Text
                style={{
                    alignSelf: 'center',
                    fontSize: 22,
                    marginVertical: 16,
                    fontStyle: 'italic',
                    color: 'grey',
                }}>
                ---------- OR ----------
            </Text>
            <TextInput
                value={meetingVal}
                onChangeText={setMeetingVal}
                placeholder={'XXXX-XXXX-XXXX'}
                style={{
                    padding: 12,
                    borderWidth: 1,
                    borderRadius: 6,
                    fontStyle: 'italic',
                }}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: '#1178F8',
                    padding: 12,
                    marginTop: 14,
                    borderRadius: 6,
                }}
                onPress={() => {
                    props.getMeetingId(meetingVal);
                }}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18 }}>
                    Join Meeting
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const Button = ({ onPress, buttonText, backgroundColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
                borderRadius: 4,
            }}
        >
            <Text style={{ color: 'white', fontSize: 12 }}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

const ControlsContainer = ({ join, leave, toggleWebcam, toggleMic }) => {
    return (
        <View
            style={{
                padding: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Button
                onPress={() => {
                    join();
                }}
                buttonText={'Join'}
                backgroundColor={'#1178F8'}
            />
            <Button
                onPress={() => {
                    toggleWebcam();
                }}
                buttonText={'Toggle Webcam'}
                backgroundColor={'#1178F8'}
            />
            <Button
                onPress={() => {
                    toggleMic();
                }}
                buttonText={'Toggle Mic'}
                backgroundColor={'#1178F8'}
            />
            <Button
                onPress={() => {
                    leave();
                }}
                buttonText={'Leave'}
                backgroundColor={'#FF0000'}
            />
        </View>
    );
};

function MeetingView() {
    // Get `participants` from useMeeting Hook
    const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});
    const participantsArrId = [...participants.keys()]; // Add this line

    return (
        <View style={{ flex: 1 }}>
            <ParticipantList participants={participantsArrId} />
            <ControlsContainer
                join={join}
                leave={leave}
                toggleWebcam={toggleWebcam}
                toggleMic={toggleMic}
            />
        </View>
    );
}

const ParticipantList = ({ participants }) => {
    return participants.length > 0 ? (
        <FlatList
            data={participants}
            renderItem={({ item }) => {
                return <ParticipantView participantId={item} />;
            }}
        />
    ) : (
        <View
            style={{
                flex: 1,
                backgroundColor: '#F6F6FF',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
        </View>
    );
};

const ParticipantView = ({ participantId }) => {
    console.log("partici", participantId);
    const { webcamStream, webcamOn, enableWebcam, } = useParticipant(participantId, {});

    useEffect(() => {
        if(webcamOn) {
            console.log("webcam is on");
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track.kind);
            console.log("media stream", mediaStream);
        }
        else {
            console.log("webcam is off");
            webcamEnabled: true
        }
    }, [webcamOn])

    console.log("web stream", webcamStream);
    console.log("web cam", webcamOn);
    return webcamOn ? (
        <RTCView
            streamURL={new MediaStream([webcamStream.track]).toURL()}
            objectFit={'cover'}
            style={{
                height: 300,
                marginVertical: 8,
                marginHorizontal: 8,
            }}
        />        
    ) : (
        <View
            style={{
                backgroundColor: 'grey',
                height: 300,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
        </View>        
    );
};

// const ParticipantView = ({ participantId }) => {
//     /** Define Refs*/
//     const webcamRef = useRef(null);
//     const micRef = useRef(null);
  
//     /** useParticipant Hooks which accept `participantId`
//       as parameter then return participant properties such as displayName, webcamOn, micOn etc.  */
//     const {
//       displayName,
//       webcamStream,
//       micStream,
//       webcamOn,
//       micOn,
//       isActiveSpeaker,
//     } = useParticipant(participantId);
  
//     useEffect(() => {
//       if (webcamRef.current) {
//         if (webcamOn) {
//           const mediaStream = new MediaStream();
//           mediaStream.addTrack(webcamStream.track);
  
//           webcamRef.current.srcObject = mediaStream;
//           webcamRef.current
//             .play()
//             .catch((error) =>
//               console.error("videoElem.current.play() failed", error)
//             );
//         } else {
//           webcamRef.current.srcObject = null;
//         }
//       }
//     }, [webcamStream, webcamOn]);
  
//     useEffect(() => {
//       if (micRef.current) {
//         if (micOn) {
//           const mediaStream = new MediaStream();
//           mediaStream.addTrack(micStream.track);
  
//           micRef.current.srcObject = mediaStream;
//           micRef.current
//             .play()
//             .catch((error) =>
//               console.error("videoElem.current.play() failed", error)
//             );
//         } else {
//           micRef.current.srcObject = null;
//         }
//       }
//     }, [micStream, micOn]);
  
//     return (
//       <>
//         <View ref={micRef} autoPlay />
//         <View height={"50%"} width={"50%"} ref={webcamRef} autoPlay />
//       </>
//     );
//   };


const VideoScreen = () => {
    const [meetingId, setMeetingId] = useState(null);

    const getMeetingId = async id => {
        const meetingId = id == null ? await createMeeting({ token }) : id;
        setMeetingId(meetingId);
    };

    useEffect (() => {
        requestCameraPermission()
    }, []);


    return meetingId ? (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6FF' }}>
            <MeetingProvider
                config={{
                    meetingId,
                    micEnabled: false,
                    // participantCanToggleSelfMic: true,
                    webcamEnabled: true,
                    // participantCanToggleSelfWebcam: true,
                    // participantCanLeave: true,
                    // redirectOnLeave: "https://www.videosdk.live/",
                    // screenShareEnabled: true,
                    name: 'Test User',

                }}
                token={token}>
                <MeetingView />
            </MeetingProvider>
        </SafeAreaView>
    ) : (
        <JoinScreen getMeetingId={getMeetingId} />
    );
};

export default VideoScreen;