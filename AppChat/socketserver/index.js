var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 6969;
server.listen(port, () => console.log('Server running in port ' + port));

const users = [
  {
    id: 1,
    name: 'Công Vinh',
  },
  {
    id: 2,
    name: 'Thủy Tiên',
  },
  {
    id: 3,
    name: 'Trấn Thành',
  },
  {
    id: 4,
    name: 'Hoài Linh',
  },
];

const conversations = [
  {
    name: '12',
    member: [1, 2],
    messageData: [
      {
        time: Date.now(),
        id: 1,
        message: 'Xin chào đây là Công Vinh',
      },
      {
        time: Date.now(),
        id: 2,
        message: 'Xin chào đây là Thủy Tiên',
      },
    ],
  },
];

io.on('connection', function (socket) {
  //Bắt sự kiện một client kết nối đến server
  console.log(`${socket.id} has connected`);

  socket.on('all client', function (data) {
    //lắng nghe event 'all client'
    io.sockets.emit('news', socket.id + ' send all client: ' + data); // gửi cho tất cả client
  });

  socket.on('broadcast', function (data) {
    //lắng nghe event 'broadcast'
    socket.broadcast.emit('news', socket.id + ' send broadcast: ' + data); // gửi event cho tất cả các client từ client hiện tại
  });

  socket.on('private', function (data) {
    //lắng nghe event 'private'
    socket.emit('news', ' You send private message: ' + data); // chỉ gửi event cho client hiện tại
  });

  socket.on('plus-calculated', function (data) {
    console.log(data);
    io.sockets.emit('plus-calculated', data.a + data.b);
  });

  socket.on('disconnect', function () {
    console.log(`${socket.id} ngắt kết nối`);
  });
});

// app.get('/', (req, res) => {
//   res.sendFile('test-socket-client.html', { root: __dirname });
// });
