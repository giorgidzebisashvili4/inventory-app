// app.js
const express = require("express");
const app = express();
const categoryRoute = require("./routes/categoryRoute");
// const itemsRoute = require("./routes/itemsRoute");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", categoryRoute);
// app.use("/items", itemsRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
