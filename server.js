const VirusTotal = require("./domains/VirusTotalDomain");
// const WhoIs = require("./domains/WhoisDomain");
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(express.json({ limit: "100mb" }));

const authRouter = require("./routes/messages");
const messagesRouter = require("./routes/messages");

app.get("/:domain", async function (req, res) {
  const { domain } = req.params;
  console.log("****res:*****", domain);

  try {
    const virusTotal = new VirusTotal();
    //const whois = new WhoIs();
    const allPromise = Promise.all([
      virusTotal.getVirusTotalDomainReport(domain),
      //whois.getWhoisDomainReport(domain),
    ]);
    const [data] = await allPromise;
    console.log("data now", data);
    res.send(data);
  } catch {
    res.send("check again later");
  }
});

// app.post-> add domain to list -> body->string domain name
app.use("/api/messages", messagesRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
