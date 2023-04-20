const axios = require("axios");

class Whois {
  async getWhoisDomainReport(domain) {
    console.log("im here");
    const response = await axios.get(
      `https://api.apilayer.com/whois/query?${domain}`,
      {
        headers: {
          apikey: "EtOys3ih6Mp2ss6EqzCxg54OZX2ABijd",
        },
      }
    );
    console.log("response data", response.data);
    return response.data;
  }
}

module.exports = Whois;
