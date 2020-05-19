const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3333, function() {
  console.log('Server started on port 3333');
});
// WARNING: app.listen(80) will NOT work here!

app.get('/', (req, res) => {
  res.send('<h1>Hello World </h1>');
});

var number = 0;
io.on('connection',(socket) => {

    socket.emit('connection', {connect: 'newconnection', user: 'newuser'});
    number++;

    socket.on('message', (from, who) => {
      console.log(from);
      io.emit('message', from);
    });
});




