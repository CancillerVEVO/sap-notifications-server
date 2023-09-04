const io = require("socket.io");

function configureSocketServer(server) {
  const socketServer = io(server);

  socketServer.on("connection", (socket) => {
    console.log("A user connected");

    // Aquí puedes agregar lógica para manejar eventos de Socket.io, por ejemplo:
    // socket.on("mensaje", (data) => {
    //   console.log("Mensaje recibido:", data);
    //   socket.emit("respuesta", "Mensaje recibido con éxito");
    // });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
}

module.exports = { configureSocketServer };
