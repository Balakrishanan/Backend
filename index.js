import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/userRoutes.js";
import connectionDB from "./Connection/conn.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
app.use(
  cors({
    origin: ["https://main--funny-chimera-a58c7f.netlify.app"],
    // origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
var connection = connectionDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(connection);
if (connection) {
  app.use("/api", router);
}
app.get("/", (req, res) => res.send("server is ready"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
