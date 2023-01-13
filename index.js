const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();




// io.on('connection', ( socket ) => {
//   // console.log(socket.id);

//   //Socket le manda solo a si mismo
//   // socket.emit('mensaje-bienvenida', {
//   //   msg: 'Bienvenido al server',
//   //   fecha: new Date()
//   // });

//   //Escuchar el evento
//   //mensaje-cliente
//   socket.on('mensaje-to-server', ( data ) => {
//     console.log( data );

//     //io manda msj global a todos los que estén conectados
//     io.emit('mensaje-from-server', data);
//   });
// });

