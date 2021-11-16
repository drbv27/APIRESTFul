import mongoose from "mongoose";
const USER = "drbv27";
const PASS = "qxEWgeMJxkgKxlIA";
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
