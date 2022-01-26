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
    username: 'congvinh',
    name: 'Công Vinh',
    rooms: ['congvinhthuytien', 'congvinhhoailinh'],
  },
  {
    username: 'thuytien',
    name: 'Thủy Tiên',
    rooms: ['congvinhthuytien'],
  },
  {
    username: 'tranthanh',
    name: 'Trấn Thành',
    rooms: [],
  },
  {
    username: 'hoailinh',
    name: 'Hoài Linh',
    rooms: ['congvinhhoailinh'],
  },
];

const conversations = [
  {
    name: 'congvinhthuytien',
    member: ['congvinh', 'thuytien'],
    messageData: [
      {
        time: Date.now(),
        username: 'congvinh',
        message: 'Xin chào đây là Công Vinh',
      },
      {
        time: Date.now(),
        username: 'thuytien',
        message: 'Xin chào đây là Thủy Tiên',
      },
    ],
  },
  {
    name: 'congvinhhoailinh',
    member: ['congvinh', 'hoailinh'],
    messageData: [
      {
        time: Date.now(),
        username: 'congvinh',
        message: 'Xin chào đây là Công Vinh',
      },
      {
        time: Date.now(),
        username: 'hoailinh',
        message: 'Xin chào đây là Hoài Linh',
      },
    ],
  },
];

io.on('connection', function (socket) {
  //Bắt sự kiện một client kết nối đến server
  console.log(`${socket.id} has connected`);

  socket.on('start-connect', function (username) {
    console.log(username, 'connect');

    const existedUser = users.some((user) => {
      return user.username === username;
    });

    if (existedUser) {
      socket.on(`show-rooms-${username}`, function () {
        const userRooms = [];
        conversations.forEach((conversation) => {
          if (conversation.member.includes(username)) {
            userRooms.push(conversation.name);
          }
        });
        socket.emit(`user-${username}-rooms`, userRooms);
      });

      socket.on(`get-${username}`, function (chatName) {
        const res = conversations.find((conversation) => {
          return conversation.name === chatName;
        });

        console.log(chatName);

        if (res) {
          socket.emit(`${username}-chat`, res);
        }
      });
    } else {
    }
  });

  socket.on('all client', function (data) {
    //lắng nghe event 'all client'
    console.log(data);
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

  socket.on('disconnect', function () {
    console.log(`${socket.id} ngắt kết nối`);
  });
});

// app.get('/', (req, res) => {
//   res.sendFile('test-socket-client.html', { root: __dirname });
// });
