class Clients {
  constructor() {
    this.clientsMap = new Map();
  }

  saveClient(userId, clientId) {
    this.clientsMap.set(userId, clientId);
  }

  getClient(userId) {
    return this.clientsMap.get(userId);
  }

  removeClient(userId) {
    this.clientsMap.delete(userId);
  }
}

module.exports = Clients;
