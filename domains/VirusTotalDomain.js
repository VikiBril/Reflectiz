const axios = require("axios");

class VirusTotal {
  async getVirusTotalDomainReport(domain) {
    console.log("im here");
    const response = await axios.get(
      `https://www.virustotal.com/api/v3/domains/${domain}`,
      {
        headers: {
          "x-apikey":
            "a2839507a8b5bfce299563c761052dd5329e5694616342c412bae6c25db65b98",
        },
      }
    );
    console.log("response data", response.data);
    return response.data;
  }
}

module.exports = VirusTotal;
