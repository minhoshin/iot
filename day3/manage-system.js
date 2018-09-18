var exec = require('child_process').exec;
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, () => {
  console.log('Server is running, port 8080');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/manage-system.html');
});

app.get('/parking/in', (req, res) => {
    io.emit('event_to_all', '주차장에 진입 하였습니다.');
    console.log('주차장에 진입 하였습니다.');
    res.send('success');
});

io.on('connection', (socket) => {

  console.log('에너지 관제 통합 시스템에 접속 하였습니다.');

  socket.on('parkLightOn', (msg) => {
    console.log('조명 제어 이벤트: ', msg);
    io.emit('event_to_all', '주차장 조명이 켜졌습니다.');
    // 조명 제어
  });

  socket.on('parkLightOff', (msg) => {
    console.log('조명 제어 이벤트: ', msg);
    io.emit('event_to_all', '주차장 조명이 꺼졌습니다.');
    // 조명 제어
  });
  
});
