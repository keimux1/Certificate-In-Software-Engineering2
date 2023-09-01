const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();


router.get("/form", (req, res) => {
  res.render("inputform");
});

router.post("/regnewuser", async (req, res) => {
try {
  const newUser = new userModel(req.body);
  await newUser.save();
  console.log(req.body);
  res.redirect("/api/form"); // redirect o the employeeform
  prompt("You have successfully Registered a User")
} catch (error) {
  res.status(400).render("inputform");
  console.log(error);
}
});

module.exports = router;
