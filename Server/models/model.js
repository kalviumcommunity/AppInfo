const mongoose = require("mongoose");
const schema = require("./schema");

const url =
  "mongodb+srv://balajis:hcsnTgKf5YhQ6oGw@cluster1.uzi21wt.mongodb.net/test";

const aptdata = mongoose.model("aptdata", schema);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

function mongodb(data) {
  aptdata.create(data).catch((err) => console.error("Could not create document", err));
}

module.exports = { aptdata, mongodb };
