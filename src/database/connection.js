const mongoose = require("mongoose");
const { DB_URL } = require("../config/env");
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
.then(()=>{console.log("connection successful")})
.catch((err)=>{console.log(err)})