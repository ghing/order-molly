var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = process.env.ORDER_MOLLY_PORT || 3000;

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/sounds', express.static('sounds'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', function(req, res) {
  res.sendFile(__dirname + '/admin.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('add:admin', function() {
    socket.join('admins');
    console.log("Added admin " + socket.id);
  });

  socket.on('order', function(id, item, name) {
    socket.to('admins').emit('receive:order', id, item, name);
  });

  socket.on('complete:order', function(id, item, name) {
    console.log("Order of " + item + " for " + name + "(" + id + ")" + " is complete ");
    socket.to('/#' + id).emit('notify:order:complete', item, name);
  });
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
