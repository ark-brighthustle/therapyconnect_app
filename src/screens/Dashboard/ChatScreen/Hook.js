import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
// import auth from "../../../utils/auth";
import {getChat} from "../../../core/Api/userActivity";

const SERVER_URL = "https://socket.tcapi.supersyntax.in";
// const JWT_TOKEN = "0d021e3a995168d8cec306acdc7239580ed6ae359a80e198e36a0440eb63e6dd40beefe1afdd3aaa794f3737843aa13a8df8c5597365fe2f5f9ec1fde32d91afbc946aef39747235d521aba4fb02d4c906f8b2aac818dd45a2be8e4e6bda156082399155478578b72fdfe50de9d874e8987138e6cdc809e764405e749f04a436";
// const user = auth.getUserInfo();
const NEW_CHAT_MESSAGE_EVENT = "message"; 
const NEW_CHAT_MESSAGE_EVENT_SEND = "sendMessage"; 

const socket = io(SERVER_URL);

const useChat = (room, name, userID) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();
    var sysUserId = 1;
  
    useEffect(() => {

        const getUserChat = async () => {
            const msgData = [];
            const response = await getChat('test');
            if(response.status === 200){
                var messageData = response.data.data;
                messageData.map((message, index) => {
                var msgUserId = message.user_id;
                
                if(msgUserId.toString() === sysUserId.toString()){
                    msgData.push({position: 'right', type: "text", title: message.name, text: message.message,});
                }else{
                    msgData.push({position: 'left', type: "text", title: message.name, text: message.message,});
                }
                })
                setMessages(msgData);
            }else{
                console.log(response.error);
            }
        }
        getUserChat();

        socketRef.current = socket.on('connect', (e) => {
            console.log(e);
        //   setIsConnected(true);
        });
        socket.emit('join', {name, room, userID}, (error) => {
            if(error) {
                console.log(error);
            }
        });
      
        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            console.log(message);
            setMessages(oldMsg => [...oldMsg, {position: message.user_id.toString() === sysUserId.toString() ? 'right' : 'left', type: "text", title: message.response.name, text: message.response.message,}]);
        });

        return () => {
          socketRef.current.disconnect();
        };
    }, [room]);
  
    const sendMessage = (messageBody) => {
        console.log(messageBody);
        // setMessages(oldMsg => [...oldMsg, {position: 'right', type: "text", title: name, text: messageBody,}]);
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT_SEND, messageBody , (e) => {console.log(e)});
    };
  
    return { messages, sendMessage };
  };
  
  export default useChat;