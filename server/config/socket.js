
let connections = [];

let socketRooms = {
  
};

// socketRooms['room3'] = ['R6a28SbSgQiX9nnAAAAN'];

// console.log(socketRooms);

module.exports = io.sockets.on("connection", (socket) => {
  // console.log(socket.request.client)
  connections.push(socket.id);
  console.log('new connect ' + connections)

  socket.on("disconnect", (data) => {
    connections.splice(connections.indexOf(socket), 1);
    console.log("disconnect");
  });

  socket.on('send message', (data)=>{
    console.log(data)
    io.sockets.emit('add message', {name:data.name, message:data.message,pathname:data.pathname})
  })
});