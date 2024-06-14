import router from "./Routers";
const express = require("express");
const config = require("../config/config");
const connectDB = require("../config/dbConnection");
const cors = require("cors");
const app = express();

app.use(cors());


const port = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));

app.use(router);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

connectDB();
