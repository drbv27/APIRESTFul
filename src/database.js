import mongoose from "mongoose";
const USER = "fazt";
const PASS = "E9G7gMi9QfE4ojEi";
const DATAB = "companydb";
const uri = `mongodb+srv://${USER}:${PASS}@cluster0.mzxff.mongodb.net/${DATAB}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Is connected");
  })
  .catch((error) => {
    console.log(error);
  });
