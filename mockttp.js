const mockServer = require('mockttp').getLocal();

// Before each test, start up the server:
mockServer.enableDebug()

mockServer.start({
  startPort: 4000,
  endPort: 8080,
});

console.log('started mockttp')
