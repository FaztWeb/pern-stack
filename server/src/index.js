const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/tasks.routes");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(router);

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
