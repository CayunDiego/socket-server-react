
class Sockets {

  constructor( io ) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    //On connection
    this.io.on('connection', ( socket ) => {
      //Escuchar evento mensaje-to-server
      socket.on('mensaje-to-server', ( data ) => {
        console.log( data );
        //io manda msj global a todos los que estén conectados
        this.io.emit('mensaje-from-server', data);
      });
    });
  }


}

module.exports = Sockets;