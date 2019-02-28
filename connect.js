const mongodb = require("mongodb");

let uri =
  "mongodb+srv://app-service:Helloyou10@cluster0-cgb1k.mongodb.net/test?retryWrites=true";
function connect(database) {
  return mongodb.MongoClient.connect(uri).then(client => {
    return client.db(database);
  });
}

module.exports = connect;
