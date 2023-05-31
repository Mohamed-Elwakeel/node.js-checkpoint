const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "Mohamed-ElWakeel1@outlook.com",
    pass: "*********",
  },
});

const mail = {
  from: "Mohamed-ElWakeel1@outlook.com",
  to: "mo7mdhassan7@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hope this email find you well.",
};

transporter.sendMail(mail, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
