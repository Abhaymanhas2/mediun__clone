const mongoose = require("mongoose");

const url =
  "mongodb+srv://abhay:R2RvpanANC1WRC3M@cluster0.lqh5o9h.mongodb.net/medium";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
