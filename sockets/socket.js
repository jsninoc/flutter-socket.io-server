const { io } = require('../index');

//MENSAJES SOCKET
io.on('connection', client => {
  console.log('Cliente conectado');

  client.on('disconnect', () => {
    console.log('Cliente desconectado')
  });

  client.on('mensaje', payload => {
    console.log(payload.nombre);

    io.emit('mensaje', {
      admin: 'Nuevo mensaje'
    })
  })
});