const mockServer = require('mockttp').getLocal();

// Before each test, start up the server:
mockServer.enableDebug()

mockServer.start(4000);

console.log('started mockttp')
