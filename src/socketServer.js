const io = require("socket.io");
const Clients = require("./utils/Clients");

const clients = new Clients();

function configureSocketServer(server) {
  const socketServer = io(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });

  socketServer.on("connection", (socket) => {
    socket.on("login", ({ userId }) => {
      clients.saveClient(userId, socket.id);

      console.log("clients", clients.clientsMap);
    });

    socket.on("subscribe", (data) => {
      const { userId } = data;

      const clientId = clients.getClient(userId);

      if (clientId) {
        console.log("clientId", clientId);

        socket.to(clientId).emit("notification", data);
      } else {
        console.log("User not found");
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
}

module.exports = { configureSocketServer };
