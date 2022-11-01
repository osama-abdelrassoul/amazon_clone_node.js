// import from pacages
const express = require("express");
const mongoose = require("mongoose");
// import from other files
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter= require('./routes/product');
const userRouter = require("./routes/user");
// init
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://osama:osama2142003@cluster0.gipcsbp.mongodb.net/?retryWrites=true&w=majority";
// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
// connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT} `);
});
