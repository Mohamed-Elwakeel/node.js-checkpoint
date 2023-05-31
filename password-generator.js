const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 10,
  numbers: true,
  lowercase: true,
  uppercase: false,
});

console.log(password);
