
var express = require("express");

var router = express.Router();
const path = require('path');
const orm = require('./orm')

var submit = {
  create: function (cols, vals, cb) {
    orm.create("flipcard", cols, vals, function (res) {
      cb(res);
    });
  }
}

router.post("/api/submit", function (req, res) {
  submit.create(
    req.body
  , function (result) {
    // Send back the ID of the new quote

    res.json({ result });
  });
});


//get route
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "form.html"))
})

module.exports = router;