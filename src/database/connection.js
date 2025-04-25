const mongoose = require("mongoose");
const { DB_URL } = require("../config/env");
mongoose.connect(DB_URL||"mongodb+srv://eparkgateway:qsb3O2PbQzMUysvX@epark.vrqna2i.mongodb.net/NEWDATA?retryWrites=true&w=majority&appName=Epark")
.then(()=>{console.log("connection successful")})
.catch((err)=>{console.log(err)})