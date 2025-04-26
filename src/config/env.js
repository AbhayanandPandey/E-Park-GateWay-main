const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL || "mongodb+srv://iamabhayanand1:n8ylLGy3sfeaZBZX@e-park-gateway.0urvfam.mongodb.net/NEWDATA?retryWrites=true&w=majority&appName=e-park-gateway",
};