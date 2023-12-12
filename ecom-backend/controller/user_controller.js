const nodemailer = require("nodemailer");
const User = require("../models/user_model");
module.exports.signup = async (req, res) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  };
  try {
    const userdata = await User.insertMany(user);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anshulsharma.sharma997@gmail.com",
        pass: "xbuc wwsx ytwf iwlq",
      },
    });
    const otp = Math.floor(Math.random() * 1000000 + 1);
    var mailOptions = {
      from: "anshulsharma.sharma997@gmail.com",
      to: req.body.email,
      subject: "Password Reset",
      html: "<b>Your one time password for amazon clone is : " + otp + "</b>",
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      console.log(error, info);
    });

    if (userdata) {
      res.status(200).json(userdata);
    } else {
      rres.status(202).json({ error: true, signup: fail });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.signin = async (req, res) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
  };
  const userdata = await User.findOne(user);
  if (userdata) {
    res.status(200).json(userdata);
  } else {
    res.status(200).json(userdata);
  }
};
