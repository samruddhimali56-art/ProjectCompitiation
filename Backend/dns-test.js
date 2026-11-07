const dns = require("dns").promises;

dns.resolveSrv("_mongodb._tcp.cluster0.3skylqk.mongodb.net")
  .then(console.log)
  .catch(console.error);