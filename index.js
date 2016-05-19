var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('order', function(item, name) {
    console.log(name + " ordered " + item);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
