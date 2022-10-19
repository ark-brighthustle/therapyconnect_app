// import io from 'socket.io-client';
import React, {Component} from 'react';
import io from 'socket.io-client/dist/socket.io';
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io1 = require('socket.io')(server);
server.listen(3000);

// const SOCKET_URL = 'http://localhost:3000';

class WSService extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3000', {jsonp: false});
  }
  initializeSocket = async () => {
    try {
      io1.on('connection', function (socket) {
        console.log('connection', socket.id);
      });
      // this.socket = io(SOCKET_URL, {
      //   transports: ['websocket'],
      // });
      // console.log('initializing socket', this.socket);

      // this.socket.on('connect', data => {
      //   console.log('=== socket connected ===');
      // });

      // this.socket.on('disconnect', data => {
      //   console.log('=== socket disconnected ===');
      // });

      // this.socket.on('error', data => {
      //   console.log('=== socket error ===', data);
      // });
    } catch (error) {
      console.log('socket is not initialized', error);
    }
  };

  //   emit(event, data = {}) {
  //     this.socket.emit(event, data);
  //   }

  //   on(event, cb) {
  //     this.socket.on(event, cb);
  //   }

  //   removeListener(listenerName) {
  //     this.socket.removeListener(listenerName);
  //   }
}

const socketServices = new WSService();

export default socketServices;
