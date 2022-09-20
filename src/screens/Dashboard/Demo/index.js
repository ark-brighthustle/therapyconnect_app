// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     StyleSheet,
//     StatusBar,
//     SafeAreaView,
//     Dimensions,
//     Image,
//     ActivityIndicator,
//     Text,
// } from 'react-native';
// import StaggeredList from '@mindinventory/react-native-stagger-view';
// import { ImagesContent } from '../../../constants/images';
// // import { useRoute } from '@react-navigation/native';

// const Demo = () => {
//     // const route = useRoute();
//     const SCREEN_WIDTH = Dimensions.get('window').width;

//     // const selectedAnimType = route?.params?.animationType;
//     //   console.log('selectedAnimType >>>', selectedAnimType);
//     const [imageURL, setImageURL] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const img = [
//         "https://latice.therapyconnect.in//uploads/dr_reckeweg_r89_lipocol_drops_30_ml_0_1_c61b4deda6.jpeg",
//         "https://latice.therapyconnect.in//uploads/dr_reckeweg_r16_cimisan_drops_22_ml_0_6c6fe1209e.jpeg",
//         "https://latice.therapyconnect.in//uploads/new_life_nl_2_blood_urea_creatinin_drops_30_ml_0_05d925ce5d.jpeg",
//         "https://latice.therapyconnect.in//uploads/dr_reckeweg_r89_lipocol_drops_30_ml_0_1_c61b4deda6.jpeg",
//         "https://latice.therapyconnect.in//uploads/dr_reckeweg_r16_cimisan_drops_22_ml_0_6c6fe1209e.jpeg",
//         "https://latice.therapyconnect.in//uploads/new_life_nl_2_blood_urea_creatinin_drops_30_ml_0_05d925ce5d.jpeg",
//         "https://latice.therapyconnect.in//uploads/dr_reckeweg_r89_lipocol_drops_30_ml_0_1_c61b4deda6.jpeg",
//         "https://latice.therapyconnect.in//uploads/dr_reckeweg_r16_cimisan_drops_22_ml_0_6c6fe1209e.jpeg",
//         "https://latice.therapyconnect.in//uploads/new_life_nl_2_blood_urea_creatinin_drops_30_ml_0_05d925ce5d.jpeg",
//     ]

//     // export type AnimationType = 'FADE_IN_FAST' | 'SLIDE_LEFT' | 'SLIDE_DOWN' | 'EFFECTIVE' | 'FLIPPED' | 'NONE';
//     useEffect(() => {
//         // const fetchImages = () => {
//         //     setIsLoading(true);
//         //     fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
//         //         .then(res => res.json())
//         //         .then(resJson => {
//         //             setImageURL([...resJson]);
//         //             setIsLoading(false);
//         //         })
//         //         .catch(e => {
//         //             console.log(e);
//         //             setIsLoading(false);
//         //         });
//         // };
//         setImageURL([...img]);
//         setIsLoading(false)

//         // fetchImages();
//     }, []);

//     const getChildrenStyle = () => {
//         return {
//             width: (SCREEN_WIDTH - 18) / 2,
//             height: Number(Math.random() * 20 + 12) * 10,
//             backgroundColor: 'gray',
//             margin: 4,
//             borderRadius: 18,
//         };
//     };

//     const renderChildren = item => {
//         return (
//             <View style={getChildrenStyle()} key={item.id}>
//                 <View style={styles.avatarImage}>
//                     <Image
//                         onError={() => { }}
//                         style={styles.img}
//                         source={{
//                             uri: item,
//                         }}
//                         resizeMode={'cover'}
//                     />
//                     <View className="items-center justify-center bg-red-500">
//                         <Text>hii</Text>
//                         <View>
//                             <Text>Homeopathy</Text>
//                         </View>
//                         <View>
//                             <Text>Homeopathy</Text>
//                             <Text>seizure & fits</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.mainWrapperView}>
//                 {isLoading ? (
//                     <View style={styles.activityIndicatorWrapper}>
//                         <ActivityIndicator color={'black'} size={'large'} />
//                     </View>
//                 ) : (
//                     <StaggeredList
//                         data={imageURL}
//                         animationType={'FADE_IN_FAST'}
//                         contentContainerStyle={styles.contentContainer}
//                         showsVerticalScrollIndicator={false}
//                         renderItem={({ item }) => renderChildren(item)}
//                         isLoading={isLoading}
//                         LoadingView={
//                             <View style={styles.activityIndicatorWrapper}>
//                                 <ActivityIndicator color={'black'} size={'large'} />
//                             </View>
//                         }
//                     />
//                 )}
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//         backgroundColor: 'gray',
//     },
//     mainWrapperView: {
//         flex: 1,
//         backgroundColor: 'white',
//         paddingTop: 20,
//     },
//     activityIndicatorWrapper: {
//         alignSelf: 'center',
//         justifyContent: 'center',
//         flex: 1,
//     },
//     contentContainer: {
//         paddingHorizontal: 0,
//         alignSelf: 'stretch',
//     },
//     img: {
//         width: '100%',
//         height: '50%',
//     },
//     avatarImage: {
//         height: '100%',
//         width: '100%',
//         overflow: 'hidden',
//         borderRadius: 18,
//         backgroundColor: "green"
//     },
// });

// export default Demo;