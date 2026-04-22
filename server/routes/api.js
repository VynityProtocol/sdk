const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Vynity API 🚀"
  });
});

router.get("/idea", (req, res) => {
  res.json({
    idea: "Build something amazing with Vynity!"
  });
});

module.exports = router;
