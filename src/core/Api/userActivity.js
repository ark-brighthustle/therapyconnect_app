// import Axios from "./Axios";

// export const userProfileRegisteration = async (data) => {
//     try {
//       const response = await Axios.post("/auth/local/register", data);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };

//   export const userLogin = async (data) => {
//     try {
//       const response = await Axios.post("/auth/local/", data);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };

//   export const sendEmailConfirmation = async (data) => {
//     try {
//       const response = await Axios.post("/auth/send-email-confirmation", data);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };

//   export const forgotPasswordCheck = async (data) => {
//     try {
//       const response = await Axios.post("/auth/forgot-password", data);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };

//   export const setNewPassword = async (data) => {
//     try {
//       const response = await Axios.post("/auth/reset-password", data);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };

//   export const changePassword = async (userid, data) => {
//     try {
//       const response = await Axios.put("/users/"+userid+"/", data);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };

//   export const getChat = async (roomId) => {
//     try {
//       const response = await Axios.get("/chats?sort[0]=updatedAt:asc&filters[roomID]="+roomId);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };

//   export const getMedicalReports = async (userid) => {
//     try {
//       const response = await Axios.get("/diagnostic-reports?sort[0]=updatedAt:asc&filters[userId]="+userid);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };
