// let http = require('http');

// http.createServer(function(request, response) {
//     //Send the HTTP header 
//     //HTTP Status: 200 : OK
//     //Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     //Send the response body as "Hello World"
//     response.end('Hello World\n');
//     console.log(response);
//   }).listen(5001);
  
  
//   //Console will print the message
//   console.log('Server running at http://127.0.0.1:5001/');

// var fs = require("fs");
// // fs is the file system module we will see it later
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");

// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
// //this is the callBack function
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

// console.log("Program Ended");

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");