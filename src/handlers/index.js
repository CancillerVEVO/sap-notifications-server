const SAPService = require("./SapService");

const sapNotif = new SAPService(process.env.SAP_API_URL);

module.exports = sapNotif;
