import { Server } from 'socket.io';

let clientCount = 0;
let debug_log = true;

export default function injectSocketIO(server) {
	const io = new Server(server);

	io.on('connection', (socket) => {
		clientCount = clientCount + 1;
		console.log('Client Count', clientCount);
		io.emit('clientCount', clientCount);
		console.log(socket.id);
		socket.on('disconnecting', () => {
			console.log('client disconnecting');
			console.log(socket.rooms); // the Set contains at least the socket ID
			console.log(socket.id);
		});
		socket.on('disconnect', () => {
			console.log('client disconnected');
			clientCount = clientCount - 1;
			console.log('Client Count', clientCount);
			io.emit('clientCount', clientCount);
		});

		socket.on('mixer-update', (message) => {
			if (debug_log) console.log('Message recieved on server for ', 'mixer-update');
      io.emit('mixer-update', message);
		});
		
		socket.on('reconnect', () => {
			console.log('Reconnect');
		});
		
		socket.on('checkConnections', (count) => {
			console.log('Check Connection message found', count);
			if (clientCount !== Number(count)) {
				io.emit('clientCount', clientCount);
			}
		});
		console.log('SocketIO injected');
	});
}
