import io from 'socket.io-client';

let socket = io.connect();

socket.emit('clientAuth', 'askgjhasdfil935871893');

export default socket;