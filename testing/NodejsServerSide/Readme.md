An Example Node.js Application
The most common example Hello World of Node.js is a web server:
o run this snippet, save it as a server.js file and run node server.js in your terminal. If you use mjs version of the code, you should save it as a server.mjs file and run node server.mjs in your terminal.
This code first includes the Node.js http module.
Node.js has a fantastic standard library, including first-class support for networking.
The createServer() method of http creates a new HTTP server and returns it.
The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.
Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).
