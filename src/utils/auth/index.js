// import { isEmpty } from 'lodash';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const TOKEN_KEY = 'jwtToken';
// const USER_INFO = 'userInfo';

// const parse = JSON.parse;
// const stringify = JSON.stringify;

// const auth = {
//     /**
//      * Remove an item from the used storage
//      * @param  {String} key [description]
//      */
//     clear(key) {
//         if (AsyncStorage && AsyncStorage.getItem(key)) {
//             return AsyncStorage.removeItem(key);
//         }

//         if (sessionStorage && sessionStorage.getItem(key)) {
//             return sessionStorage.removeItem(key);
//         }

//         return null;
//     },

//     /**
//      * Clear all app storage
//      */
//     // clearAppStorage() {
//     //     if (AsyncStorage) {
//     //         AsyncStorage.clear();
//     //     }

//     //     if (sessionStorage) {
//     //         sessionStorage.clear();
//     //     }
//     // },

//     clearToken(tokenKey = TOKEN_KEY) {
//         return auth.clear(tokenKey);
//     },

//     clearUserInfo(userInfo = USER_INFO) {
//         return auth.clear(userInfo);
//     },

//     /**
//      * Returns data from storage
//      * @param  {String} key Item to get from the storage
//      * @return {String|Object}     Data from the storage
//      */
//     get(key) {
//         if (AsyncStorage && AsyncStorage.getItem(key)) {
//             return parse(AsyncStorage.getItem(key)) || null;
//         }

//         if (sessionStorage && sessionStorage.getItem(key)) {
//             return parse(sessionStorage.getItem(key)) || null;
//         }

//         return null;
//     },

//     getToken(tokenKey = TOKEN_KEY) {
//         return auth.get(tokenKey);
//     },

//     getUserInfo(userInfo = USER_INFO) {
//         return auth.get(userInfo);
//     },

//     /**
//      * Set data in storage
//      * @param {String|Object}  value    The data to store
//      * @param {String}  key
//      * @param {Boolean} isAsyncStorage  Defines if we need to store in localStorage or sessionStorage
//      */
//     set(value, key, isAsyncStorage) {
//         if (isEmpty(value)) {
//             return null;
//         }

//         if (isAsyncStorage && AsyncStorage) {
//             return AsyncStorage.setItem(key, stringify(value));
//         }

//         if (sessionStorage) {
//             return sessionStorage.setItem(key, stringify(value));
//         }

//         return null;
//     },

//     setToken(value = '', isAsyncStorage = false, tokenKey = TOKEN_KEY) {
//         return auth.set(value, tokenKey, isAsyncStorage);
//     },

//     setUserInfo(value = '', isAsyncStorage = false, userInfo = USER_INFO) {
//         return auth.set(value, userInfo, isAsyncStorage);
//     },
// };

// export default auth;
