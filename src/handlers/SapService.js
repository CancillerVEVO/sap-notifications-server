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
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = SAPService;
