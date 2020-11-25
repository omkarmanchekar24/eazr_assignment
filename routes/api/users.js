const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Load User Model
const User = require("../../models/User");

//Load input validations
const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");
const keys = require("../../config/keys");

//@route    api/users/test
//@desc     Tests users route
//@access   Public
router.get("/test", (req, res) => {
  return res.status(200).json({ msg: "Users works!" });
});

//@route    api/users/register
//@desc     register user
//@access   Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ email: "Email already exists" });

    const newUser = new User({
      email,
      name,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => {
            res.status(200).json(user);
          })
          .catch((err) => console.log(err));
      });
    });
  });
});

//@route    api/users/login
//@desc     login user
//@access   Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //User Matched
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        }; // Jwt Payload

        //Sign Token
        jwt.sign(payload, keys.secretOrKey, (err, token) => {
          if (err) throw err;
          res.status(200).json({
            success: true,
            token: "Bearer " + token,
          });
        });
      } else {
        errors.password = "Password is incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
