const mongoose = require("mongoose")
mongoose.set("strictQuery", true)

const atlasUrl = process.env.atlasUrl

async function connectToDB (){
    try{
    await mongoose.connect(atlasUrl)
    console.log("server connected to database");
    }catch(err){
        console.log(err, "Error in making the connection with dataBase");
    }
}

module.exports = connectToDB