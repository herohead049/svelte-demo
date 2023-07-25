//let wsAddress = import.meta.env.VITE_WS_ADDRESS;

import ioClient from 'socket.io-client';
//const ENDPOINT = wsAddress;
//const ENDPOINT = "ws://104.203.172.181:3000";
//const ENDPOINT = "ws://20.127.192.27/";
const ENDPOINT = 'ws://localhost:3000';
const socket = ioClient(ENDPOINT);

export const io = socket;
