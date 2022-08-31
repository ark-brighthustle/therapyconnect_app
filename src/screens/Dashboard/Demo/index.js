import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import WavyBackground from "react-native-wavy-background";

const Demo = () => {
    return (
        <View>
            {/* <WavyBackground
                height={300}
                width={1100}
                amplitude={25}
                frequency={1}
                offset={200}
                color="#1F618D"
            /> */}
        </View>
    )
}

export default Demo

const styles = StyleSheet.create({})


// import Axios from "./../Axios";

// export const getDoctorProfile = async (id) => {
//   try {
//     const response = await Axios.get("/doctor-registerations/"+id+"?populate=*");
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllDoctorList = async () => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&_sort[0]=review:desc");
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllDoctorListLocationWise = async (location) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllDoctorListTherapyWise = async (therapy) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[therapy]="+therapy);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllDoctorListModeWise = async (mode) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[deliveryModes]="+mode);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllDoctorListHealthConcern = async (health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllDoctorListLocationTherapy = async (location,therapy) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location+"&filters[therapy]="+therapy);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllDoctorListLocationMode = async (location,mode) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location+"&filters[deliveryModes]="+mode);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListTherapyMode = async (therapy,mode) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[therapy]="+therapy+"&filters[deliveryModes]="+mode);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListLocationHealth = async (location,health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location+"&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListTherapyHealth = async (therapy,health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[therapy]="+therapy+"&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListModeHealth = async (mode,health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[deliveryModes]="+mode+"&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListLocationTherapyMode = async (location,therapy,mode) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location+"&filters[therapy]="+therapy+"&filters[deliveryModes]="+mode);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListLocationTherapyHealth = async (location,therapy,health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location+"&filters[therapy]="+therapy+"&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListTherapyModeHealth = async (therapy,mode,health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[therapy]="+therapy+"&filters[deliveryModes]="+mode+"&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListLocationModeHealth = async (location,mode,health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location+"&filters[deliveryModes]="+mode+"&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getAllDoctorListLocationTherapyModeHealth = async (location,therapy,mode,health) => {
//   try {
//     const response = await Axios.get("/doctor-registerations?populate=*&filters[verified]=true&filters[city]="+location+"&filters[therapy]="+therapy+"&filters[deliveryModes]="+mode+"&filters[healthConcerns]="+health);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }


// export const getAllDoctorListKeyword = async (keyword) => {
//   var link = "/doctor-registerations?populate=*&filters[verified]=true&filters[$or][0][city][$containsi]="+keyword+"&filters[$or][1][therapy][label][$containsi]="+keyword+"&filters[$or][2][deliveryModes][label][$containsi]="+keyword+"&filters[$or][3][healthConcerns][label][$containsi]="+keyword;
//   try {
//     const response = await Axios.get(link);
    
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

// export const getHealthConcernLists = async () => {
//   try {
//     const response = await Axios.get("/health-concerns?sort=id:asc&populate=*");
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

