const WebSocket = require('ws');
const HttpProxyAgent = require('http-proxy-agent');

const PROXY_ADDRESS = "http://localhost:4000";
const SERVER_ADDRESS = "ws://localhost:8080";

setTimeout(() => {
  const ws = new WebSocket(SERVER_ADDRESS, { agent: new HttpProxyAgent(PROXY_ADDRESS) });

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
