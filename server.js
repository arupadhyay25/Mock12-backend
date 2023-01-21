let express = require("express");
const { connection } = require("./config/db");

let cors = require("cors");
const grow = require("./Routes/grow.route");
const auth = require("./Routes/login.routes");

let app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/", auth);
app.use("/grow", grow);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error from listning");
    console.log(error);
  }
  console.log("Listning on 8080");
});
