// import 'expo-dev-client';
// import React from 'react';
// import { View } from 'react-native';
// import AgoraUIKit from 'agora-rn-uikit';

// const Demo = () => {
//     // const [videoCall, setVideoCall] = useState(true);
//     // const props = {
//     //     connectionData: {
//     //         appId: '62bd461b048b0e92876a90c8',
//     //         channel: 'test',
//     //     },
//     //     rtcCallbacks: {
//     //         EndCall: () => setVideoCall(false),
//     //     },
//     // };

//     return (
//         <View className="h-full w-full flex">
//             <AgoraUIKit
//                 // connectionData={props.connectionData}
//                 // rtcCallbacks={props.rtcCallbacks}
//                 rtcProps={{
//                     appId: '62bd461b048b0e92876a90c8',
//                     channel: 'test'
//                 }}
//             />
//         </View>
//     );
// };

// export default Demo;

// import React, { useState } from 'react';
// import AgoraUIKit from 'agora-rn-uikit';

// const Demo = () => {
//     const [videoCall, setVideoCall] = useState(true);
//     const connectionData = {
//         appId: '62bd461b048b0e92876a90c8',
//         channel: 'test',
//     };
//     const rtcCallbacks = {
//         EndCall: () => setVideoCall(false),
//     };
//     return videoCall ? (
//         <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
//     ) : (
//         <Text onPress={() => setVideoCall(true)}>Start Call</Text>
//     );
// };

// export default Demo;