const express = require("express");

const router = express.Router();

// GET /hello
router.get("/hello", (req, res, next) => {
  res.status(200).send("hello");
});

module.exports = router;
