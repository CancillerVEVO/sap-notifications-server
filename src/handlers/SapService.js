class SAPService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async callEndpoint(requestBody) {
    try {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = {
        status: response.status,
        message: await response.json(),
      };

      if (data.status !== 200) {
        throw new Error(JSON.stringify(data.message));
      }

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = SAPService;
