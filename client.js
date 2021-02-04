const WebSocket = require('ws');

setTimeout(() => {
  const ws = new WebSocket('ws://localhost:4000');

  ws.on('open', function open() {
    ws.send('something');
  });

  ws.on('message', function incoming(data) {
    console.log(data);
  });

  ws.on('error', function incoming(error) {
    console.log(error);
  });

}, 3000)
