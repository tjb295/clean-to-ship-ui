const app = require('./backend/app');
const http = require('http');
const debug = require("debug")("node-angular");

//deal with any discrepencies with port input
const normalizePort = val => {
  var port = parseInt(val, 10);

  if(isNaN(port)) {
    return val;
  }

  if(port >= 0 ) {
    return port;
  }

  return false;
}

const onError = error => {
  if(error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;

  //deal with error type
  switch(error.code) {
    case "EACCESS":
      console.error(bind + " requires elevated priveleges");
      process.exit(1);
      break;
    case " EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
  debug("Listening on " + bind);
};

//use 3000 as default is no value set for environment
const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
