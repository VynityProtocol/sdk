const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
