const { NotFoundError, UnauthorizedError } = require("./AppError");

class SAPService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async callEndpoint(requestBody) {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const status = response.status;

    const message = await response.json();

    if (status === 404) {
      throw NotFoundError.create(message.error);
    }

    if (status === 401) {
      throw UnauthorizedError.create(message.error);
    }

    return message;
  }
}

module.exports = SAPService;
